package com.laptrinhjavaweb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.laptrinhjavaweb.dto.RoleDTO;
import com.laptrinhjavaweb.entity.RoleEntity;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
	//RoleEntity findAll(List<RoleDTO> listRole);
	RoleEntity findOneByCode(String code);
}
