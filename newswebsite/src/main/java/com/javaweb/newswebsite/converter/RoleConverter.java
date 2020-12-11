package com.javaweb.newswebsite.converter;

import org.springframework.stereotype.Component;

import com.javaweb.newswebsite.dto.RoleDTO;
import com.javaweb.newswebsite.entity.RoleEntity;

@Component
public class RoleConverter {
	
	public RoleEntity toEntity(RoleDTO roleDto) {
		RoleEntity roleEntity = new RoleEntity();
		roleEntity.setCode(roleDto.getCode());
		roleEntity.setName(roleDto.getName());
		return roleEntity;
	}
	
	public RoleDTO toDTO(RoleEntity roleEntity) {
		RoleDTO roleDto = new RoleDTO();
		if(roleEntity.getId() != 0) {
			roleDto.setId(roleEntity.getId());
		}
		roleDto.setName(roleEntity.getName());
		roleDto.setCode(roleEntity.getCode());
		roleDto.setCreatedBy(roleEntity.getCreatedBy());
		roleDto.setCreatedDate(roleEntity.getCreatedDate());
		roleDto.setModifiedBy(roleEntity.getModifiedBy());
		roleDto.setModifiedDate(roleEntity.getModifiedDate());
		return roleDto;
	}
}
