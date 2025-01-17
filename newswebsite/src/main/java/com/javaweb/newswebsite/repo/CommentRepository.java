package com.javaweb.newswebsite.repo;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.javaweb.newswebsite.entity.CommentEntity;

public interface CommentRepository extends JpaRepository<CommentEntity, Long> {
	Optional<CommentEntity> findCommentById(Long id);
	Page<CommentEntity> findAllByStatus(Pageable var1,Integer status);
	
}
