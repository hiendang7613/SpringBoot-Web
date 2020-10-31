package com.javaweb.newswebsite.repo;

import com.javaweb.newswebsite.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    void deleteUserById(Long id);
    Optional<UserEntity> findUserById(Long id);
}
