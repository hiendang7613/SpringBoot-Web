package com.javaweb.newswebsite.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javaweb.newswebsite.dto.UserDTO;
import com.javaweb.newswebsite.service.IUserService;


@RestController

public class UserAPI {
	
	@Autowired
	private IUserService service;
	@PostMapping(value = "/user")
	public UserDTO createNew(@RequestBody UserDTO model) {
		return service.save(model);
	}
}
