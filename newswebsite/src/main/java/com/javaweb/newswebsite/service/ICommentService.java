package com.javaweb.newswebsite.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.javaweb.newswebsite.dto.CommentDTO;

public interface ICommentService {
	CommentDTO save(CommentDTO commentDto);
	void delete(Long[] ids);
	List<CommentDTO> findALL(Pageable pageable);
	CommentDTO findById(Long id);

}
