package com.javaweb.newswebsite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaweb.newswebsite.entity.CommentChildEntity;

public interface CommentChildRepository extends JpaRepository<CommentChildEntity, Long> {
	Optional<CommentChildEntity> findCommentchildById(Long id);
}
