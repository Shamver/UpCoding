package kr.co.upcoding.vo;

import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class UserVO {
    Long user_id;
    String user_username;
    String user_email;
    String user_password;
    List<RoleVO> user_roles;
    String user_usernameOrEmail;
    boolean user_isAccountNonExpired;
    boolean user_isAccountNonLocked;
    boolean user_isCredentialsNonExpired;
    boolean user_isEnabled;

    public UserVO(){

    }

    public UserVO(String username, String email, String password, boolean isAccountNonExpired
            , boolean isAccountNonLocked, boolean isCredentialsNonExpired, boolean isEnabled){
        this.user_username = username;
        this.user_email = email;
        this.user_password = password;
        this.user_isAccountNonExpired = isAccountNonExpired;
        this.user_isAccountNonLocked = isAccountNonLocked;
        this.user_isCredentialsNonExpired = isCredentialsNonExpired;
        this.user_isEnabled = isEnabled;
    }
}
