package com.javaweb.newswebsite.api;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javaweb.newswebsite.api.output.UserOutPut;
import com.javaweb.newswebsite.dto.UserDTO;
import com.javaweb.newswebsite.entity.UserEntity;
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

	
	
	@GetMapping(value = "/user")
	public UserOutPut showUser(@RequestParam("page") int page, @RequestParam("limit") int limit,

			@RequestParam(name = "sortBy", required = false, defaultValue = "ASC") String sortBy,

			@RequestParam(name = "sortName", required = false, defaultValue = "userName") String sortName,
			HttpServletRequest request) {

		UserOutPut userOutPut = new UserOutPut();
		userOutPut.setPage(page);
		userOutPut.setSortName(sortName);
		userOutPut.setSortBy(sortBy);
		Pageable pageable;
		if (sortBy.equals("ASC")) {
			pageable = PageRequest.of(page - 1, limit, Sort.by(userOutPut.getSortName()).ascending());
		} else {
			pageable = PageRequest.of(page - 1, limit, Sort.by(userOutPut.getSortName()).descending());
		}
		userOutPut.setListUser(service.findAll(pageable));
		// userOutPut.setTotalUser(service.totalUser()); userOutPut.setTotalPage((int)
		Math.ceil((double) userOutPut.getTotalUser() / limit);

		return userOutPut;
	}
	  
	
	@GetMapping(value = "/user/")
	public UserOutPut searchByKey(@RequestParam("keyword") String keyword, HttpServletRequest request) {
		UserOutPut userOutPut = new UserOutPut();
		userOutPut.setListUser(service.findByKeyWord(keyword));
		userOutPut.setTotalUser(service.totalUser());
		return userOutPut;
	}
}
