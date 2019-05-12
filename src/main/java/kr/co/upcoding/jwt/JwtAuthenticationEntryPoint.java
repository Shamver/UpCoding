package kr.co.upcoding.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.naming.AuthenticationException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, org.springframework.security.core.AuthenticationException e) throws IOException, ServletException {
/*        logger.error("Responding with unauthorized error. Message - {}", e.getMessage());
        if(httpServletRequest.getHeader("login") != null && httpServletRequest.getHeader("login").equals("true") && e.getMessage().equals("Bad credentials")){
            PrintWriter out = httpServletResponse.getWriter();
            httpServletResponse.setContentType("application/json");
            httpServletResponse.setCharacterEncoding("UTF-8");
            out.print(false);
            out.flush();
        } else if(httpServletRequest.getMethod().equals("POST")){
            httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
        } else if(httpServletRequest.getMethod().equals("GET")){
            String redirectUrl = "/loginmodal/"+e.getMessage().toString()+"/"+HttpServletResponse.SC_UNAUTHORIZED;
            httpServletResponse.sendRedirect(redirectUrl);
        }*/
    }
}
