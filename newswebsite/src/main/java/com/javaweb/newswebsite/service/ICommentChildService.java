package com.javaweb.newswebsite.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.javaweb.newswebsite.dto.CommentChildDTO;

public interface ICommentChildService {
	CommentChildDTO save(CommentChildDTO commentChildDto);
	void delete(Long[] ids);
	List<CommentChildDTO> findALL(Pageable pageable);
	CommentChildDTO findById(Long id);
}
