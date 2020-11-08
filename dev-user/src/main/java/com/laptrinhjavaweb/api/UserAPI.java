package com.laptrinhjavaweb.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.laptrinhjavaweb.dto.UserDTO;
import com.laptrinhjavaweb.service.IUserService;

@RestController

public class UserAPI {
	
	@Autowired
	private IUserService service;
	@PostMapping(value = "/user")
	public UserDTO createNew(@RequestBody UserDTO model) {
		return service.save(model);
	}
}
