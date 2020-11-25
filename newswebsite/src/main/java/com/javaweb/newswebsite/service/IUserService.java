package com.javaweb.newswebsite.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.javaweb.newswebsite.entity.UserEntity;
import org.springframework.data.domain.Pageable;

import com.javaweb.newswebsite.dto.UserDTO;
import com.javaweb.newswebsite.entity.UserEntity;



public interface IUserService {
	UserDTO save(UserDTO userDto);
<<<<<<< HEAD
	UserDTO register(UserDTO userDto);
	UserDTO login(String userName, String password);
	UserDTO changPassword(UserDTO userDto);
	void delete(long[] ids);
=======
	void delete(Long[] ids);
>>>>>>> develop
	List<UserDTO> findAll(Pageable pageable);
	int totalUser();
	List<UserDTO> findByKeyWord(String keyword, Pageable pageable);
	List<UserDTO> findAllByCreatedDateBetween(Date startDate, Date endDate);
	UserDTO findById(Long id);
	
}
