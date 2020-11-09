package com.javaweb.newswebsite.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PutMapping(value = "/user/{id}")
	public UserDTO updateNew(@RequestBody UserDTO model, @PathVariable("id") long id) {
		model.setId(id);
		return service.save(model);
	}
	
	@DeleteMapping(value = "/user")
	public void deleteNew(@RequestBody long[] ids) {
		service.delete(ids);
	}
}
