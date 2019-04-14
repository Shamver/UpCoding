package kr.co.upcoding.vo;

import lombok.Data;

@Data
public class RoleVO {
    Long role_id;
    RoleName role_name;

    public RoleVO() {

    }

    public RoleVO(RoleName name){
        this.role_name = name;
    }
}
