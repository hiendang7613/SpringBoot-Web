package com.javaweb.newswebsite.converter;

import org.springframework.stereotype.Component;

import com.javaweb.newswebsite.dto.CommentChildDTO;
import com.javaweb.newswebsite.entity.CommentChildEntity;
import com.javaweb.newswebsite.entity.CommentEntity;

@Component
public class CommentChildConverter {
	public CommentChildEntity toEntity(CommentChildDTO dto) {
		CommentChildEntity commenChildtEntity = new CommentChildEntity();
		commenChildtEntity.setContent(dto.getContent());
		commenChildtEntity.setStatus(dto.getStatus());
		return commenChildtEntity;
	}
	
	public CommentChildDTO toDTO(CommentChildEntity entity) {
		CommentChildDTO commentChildDto = new CommentChildDTO();
		CommentEntity commentEntity = entity.getCommentEntity();
		if(entity.getId() != 0) {
			commentChildDto.setId(entity.getId());
		}
		commentChildDto.setCreatedBy(entity.getCreatedBy());
		commentChildDto.setCreatedDate(entity.getCreatedDate());
		commentChildDto.setModifiedBy(entity.getModifiedBy());
		commentChildDto.setModifiedDate(entity.getModifiedDate());
		commentChildDto.setContent(entity.getContent());
		commentChildDto.setStatus(entity.getStatus());
		commentChildDto.setCommentCode(commentEntity.getId());
		return commentChildDto;
	}
	
	public CommentChildEntity toEntity(CommentChildDTO dto, CommentChildEntity entity) {
		entity.setContent(dto.getContent());
		entity.setStatus(dto.getStatus());
		return entity;
	}
}
