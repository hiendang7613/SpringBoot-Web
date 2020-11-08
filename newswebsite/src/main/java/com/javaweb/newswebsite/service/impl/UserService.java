package com.javaweb.newswebsite.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.javaweb.newswebsite.converter.UserConverter;
import com.javaweb.newswebsite.dto.UserDTO;
import com.javaweb.newswebsite.entity.RoleEntity;
import com.javaweb.newswebsite.entity.UserEntity;
import com.javaweb.newswebsite.repo.RoleRepository;
import com.javaweb.newswebsite.repo.UserRepository;
import com.javaweb.newswebsite.service.IUserService;

@Service
public class UserService implements IUserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserConverter userConverter;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public UserDTO save(UserDTO userDto) {
		UserEntity newUserEntity = new UserEntity();
		if(userDto.getId() != null) { //update
			UserEntity oldUserEntity = userRepository.findUserById(userDto.getId()).get();
			newUserEntity = userConverter.toEntity(userDto, oldUserEntity);
		}
		else { //insert
			newUserEntity = userConverter.toEntity(userDto);
		}
		//List<RoleEntity> roleEntity = (List<RoleEntity>) roleRepository.findAll(userDto.getRole());
		//newUserEntity.setRoles(roleEntity);
		newUserEntity = userRepository.save(newUserEntity);
		
		return userConverter.toDTO(newUserEntity);
	}

	@Override
	public void delete(long[] ids) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<UserDTO> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int totalUser() {
		// TODO Auto-generated method stub
		return 0;
	}

}
