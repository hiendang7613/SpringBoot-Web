package com.javaweb.newswebsite.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaweb.newswebsite.dto.RoleDTO;
import com.javaweb.newswebsite.entity.RoleEntity;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
	//RoleEntity findAll(List<RoleDTO> listRole);
	RoleEntity findOneByCode(String code);
}
