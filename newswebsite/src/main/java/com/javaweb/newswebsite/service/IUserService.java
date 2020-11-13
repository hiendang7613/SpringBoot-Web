package com.javaweb.newswebsite.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;

import com.javaweb.newswebsite.dto.UserDTO;
import com.javaweb.newswebsite.entity.UserEntity;



public interface IUserService {
	UserDTO save(UserDTO userDto);
	void delete(long[] ids);
	List<UserDTO> findAll(Pageable pageable);
	int totalUser();
	List<UserDTO> findByKeyWord(String keyword);
}
