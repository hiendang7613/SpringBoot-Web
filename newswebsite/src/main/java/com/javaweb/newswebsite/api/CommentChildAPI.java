package com.javaweb.newswebsite.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javaweb.newswebsite.api.output.CommentChildOutput;
import com.javaweb.newswebsite.dto.CommentChildDTO;
import com.javaweb.newswebsite.service.ICommentChildService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommentChildAPI {
	@Autowired
	private ICommentChildService commentchildService;
	
	@PostMapping(value = "/commentchild")
	public CommentChildDTO createCommentChild(@RequestBody CommentChildDTO model) {
		model.setId(null);
		return commentchildService.save(model);
	}
	
	@PutMapping(value = "/commentchild/{id}")
	public CommentChildDTO updateCommentchild(@RequestBody CommentChildDTO model, @PathVariable("id") Long id) {
		model.setId(id);
		return commentchildService.save(model);
	}
	
	@DeleteMapping(value = "/commentchild")
	public void deleteCommentchildById(@PathVariable("id") Long ids) {
		commentchildService.delete(new Long[]{ids});
	}
	
	@GetMapping(value = "/commentchild")
	public CommentChildOutput showCommentchild(@RequestParam("page") int page, @RequestParam("limit") int limit,
			HttpServletRequest request) {

		CommentChildOutput commmentchildOutPut = new CommentChildOutput();
		commmentchildOutPut.setPage(page);
		Pageable pageable =  PageRequest.of(page-1, limit);
		commmentchildOutPut.setListCommentchild(commentchildService.findALL(pageable));
		Math.ceil((double) commmentchildOutPut.getTotalCommentchild() / limit);
		return commmentchildOutPut;
	}
}
