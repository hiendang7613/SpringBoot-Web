package com.laptrinhjavaweb.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.laptrinhjavaweb.dto.RoleDTO;
import com.laptrinhjavaweb.dto.UserDTO;
import com.laptrinhjavaweb.entity.RoleEntity;
import com.laptrinhjavaweb.entity.UserEntity;
import com.laptrinhjavaweb.repository.RoleRepository;

@Component
public class UserConverter {
	@Autowired
	private RoleRepository roleRepository;
	RoleConverter roleConvert = new RoleConverter();
	
	public UserEntity toEntity(UserDTO userDto) {
		UserEntity userEntity = new UserEntity();
		
		userEntity.setUserName(userDto.getUserName());
		userEntity.setPassword(userDto.getPassword());
		userEntity.setFullName(userDto.getFullName());
		userEntity.setJobTitle(userDto.getJobTitle());
		userEntity.setPhone(userDto.getPhone());
		userEntity.setImageUrl(userDto.getImageUrl());
		userEntity.setIntro(userDto.getIntro());
		userEntity.setStatus(userDto.getStatus());
	
		List<RoleEntity> enties= new ArrayList<>();
		enties.add(roleRepository.findOneByCode(userDto.getRoleCode()));
		
		userEntity.setRoles(enties);
		return userEntity;
	}
	
	public UserDTO toDTO(UserEntity userEntity) {
		UserDTO userDto = new UserDTO();
		if(userEntity.getId() != 0) {
			userDto.setId(userEntity.getId());
		}
		userDto.setUserName(userEntity.getUserName());
		userDto.setPassword(userEntity.getPassword());
		userDto.setFullName(userEntity.getFullName());
		userDto.setJobTitle(userEntity.getJobTitle());
		userDto.setPhone(userEntity.getPhone());
		userDto.setImageUrl(userEntity.getImageUrl());
		userDto.setIntro(userEntity.getIntro());
		userDto.setCreatedBy(userEntity.getCreatedBy());
		userDto.setCreatedDate(userEntity.getCreatedDate());
		userDto.setModifiedBy(userEntity.getModifiedBy());
		userDto.setModifiedDate(userEntity.getModifiedDate());
		userDto.setStatus(userEntity.getStatus());
		List<RoleDTO> roleDTOS= new ArrayList<RoleDTO>();
		if(userEntity.getRoles() != null) {
			for(RoleEntity entity:userEntity.getRoles()) {
				roleDTOS.add(roleConvert.toDTO(entity));
			}
			userDto.setRole(roleDTOS);
		}
		return userDto;
	}
	
	public UserEntity toEntity(UserDTO userDto, UserEntity userEntity) {
		
		userEntity.setUserName(userDto.getUserName());
		userEntity.setPassword(userDto.getPassword());
		userEntity.setFullName(userDto.getFullName());
		userEntity.setJobTitle(userDto.getJobTitle());
		userEntity.setPhone(userDto.getPhone());
		userEntity.setImageUrl(userDto.getImageUrl());
		userEntity.setIntro(userDto.getIntro());
		userEntity.setStatus(userDto.getStatus());
		return userEntity;
	}
}
