package com.javaweb.newswebsite.api;

import javax.servlet.http.HttpServletRequest;

import com.javaweb.newswebsite.dto.NewDTO;
import org.springframework.data.domain.PageRequest;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.javaweb.newswebsite.api.output.CommentOutput;
import com.javaweb.newswebsite.dto.CommentDTO;
import com.javaweb.newswebsite.service.ICommentService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommentAPI {
	@Autowired 
	private ICommentService commentService;
	
	@PostMapping(value = "/comment")
	public CommentDTO createComment(@RequestBody CommentDTO model) {
		model.setId(null);
		return commentService.save(model);
	}
	
	@PutMapping(value = "/comment/{id}")
	public CommentDTO updateComment(@RequestBody CommentDTO model, @PathVariable("id") Long id) {
		model.setId(id);
		return commentService.save(model);
	}
	
	@DeleteMapping(value = "/comment/{id}")
	public void deleteCommentById(@PathVariable("id") Long ids) {
		commentService.delete(new Long[]{ids});
	}


	@GetMapping(value = "/comment/{id}")
	public CommentDTO getCommentById(@PathVariable("id") Long id){
		return commentService.findById(id);
	}
	
	@GetMapping(value = "/comment")
	public CommentOutput showComment(@RequestParam("page") int page, @RequestParam("limit") int limit,@RequestParam(name="status", required = false)Integer status)
	{
		CommentOutput commmentOutPut = new CommentOutput();
		commmentOutPut.setPage(page);
		Pageable pageable =  PageRequest.of(page-1, limit);
		if(status == null)
		commmentOutPut.setListComment(commentService.findAll(pageable));
		else {
			commmentOutPut.setListComment(commentService.findAllByStatus(pageable,status));
		}
		Math.ceil((double) commmentOutPut.getTotalComment() / limit);
		return commmentOutPut;
	}
}
