package kr.co.upcoding.jwt;

import kr.co.upcoding.mapper.UserMapper;
import kr.co.upcoding.service.CustomUserDetailsService;
import kr.co.upcoding.vo.UserVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Collectors;

public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private UserMapper userRepository;

    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String jwt = getJwtFromRequest(request);

            if(StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
                Long userId = tokenProvider.getUserIdFromJWT(jwt);

                UserDetails userDetails = customUserDetailsService.loadUserById(userId);
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);

                UserVO user = userRepository.findByIdJoin(userRepository.findByUsername(userDetails.getUsername()).getUser_id());

                String roles = user.getUser_roles().stream().map(roleVO ->
                        "/"+roleVO.getRole_name().name()
                ).collect(Collectors.joining());

                final Cookie cookieForUserData = new Cookie("user", user.getUser_username()+roles);
                cookieForUserData.setPath("/");
                cookieForUserData.setSecure(false);
                cookieForUserData.setHttpOnly(false);
                cookieForUserData.setMaxAge(10000);
                response.addCookie(cookieForUserData);
            }
        } catch (Exception ex) {
            logger.error("Colud not set user authentication in security context", ex);
        }

        filterChain.doFilter(request, response);
    }

    private String getJwtFromRequest(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        Cookie cookie;
        Cookie thisCookie = null;
        if(cookies != null) {
            for (int i = 0; i < cookies.length; i++) {
                cookie=cookies[i];
                String cookieName = cookie.getName();
                String cookieValue = cookie.getValue();
                if(cookieName.equals("jwt")){
                    thisCookie = cookie;
                }
            }
        }

        //String bearerToken = request.getHeader("Authorization");
        String bearerToken;
        if(thisCookie != null){
            bearerToken = thisCookie.getValue();
        } else {
            bearerToken = request.getHeader("Authorization");
        }
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer/")) {
            return bearerToken.substring(7, bearerToken.length());
        }

        return null;
    }
}
