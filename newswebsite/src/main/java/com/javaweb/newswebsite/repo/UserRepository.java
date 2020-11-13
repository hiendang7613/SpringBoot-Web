package com.javaweb.newswebsite.repo;

import com.javaweb.newswebsite.dto.UserDTO;
import com.javaweb.newswebsite.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    void deleteUserById(Long id);
    Optional<UserEntity> findUserById(Long id);
    @Query(value = "SELECT * FROM user u WHERE u.username LIKE %?1%"
            + " OR u.fullname LIKE %?1%"
            + " OR u.phone LIKE %?1%",nativeQuery = true )
    public List<UserEntity> search(String keyword);
}
