package com.javaweb.newswebsite.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaweb.newswebsite.dto.RoleDTO;
import com.javaweb.newswebsite.entity.RoleEntity;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
	//Optional<RoleEntity> findAll(RoleDTO id[]);
	///RoleEntity findAll(RoleDTO[] dto);
	 Optional<RoleEntity> findByCode(String code);
}
