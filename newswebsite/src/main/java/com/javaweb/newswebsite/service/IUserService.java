package com.javaweb.newswebsite.service;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;

import com.javaweb.newswebsite.dto.UserDTO;



public interface IUserService {
	UserDTO save(UserDTO userDto);
	UserDTO register(UserDTO userDto);
	void delete(long[] ids);
	List<UserDTO> findAll(Pageable pageable);
	int totalUser();
	List<UserDTO> findByKeyWord(String keyword, Pageable pageable);
	List<UserDTO> findAllByCreatedDateBetween(Date startDate, Date endDate);
}
