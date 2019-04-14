package kr.co.upcoding.mapper;

import kr.co.upcoding.vo.RoleName;
import kr.co.upcoding.vo.RoleVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Mapper
@Repository
public interface RoleMapper {
    List<RoleVO> findById(Long id);
    List<RoleVO> findByName(String roleName);
}
