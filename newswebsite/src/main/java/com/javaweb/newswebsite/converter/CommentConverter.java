package com.javaweb.newswebsite.converter;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.javaweb.newswebsite.dto.CommentChildDTO;
import com.javaweb.newswebsite.dto.CommentDTO;
import com.javaweb.newswebsite.entity.CommentChildEntity;
import com.javaweb.newswebsite.entity.CommentEntity;
import com.javaweb.newswebsite.entity.NewEntity;

@Component
public class CommentConverter {
	@Autowired
	private CommentChildConverter commentchildConverter;
	public CommentEntity toEntity(CommentDTO dto) {
		CommentEntity commentEntity = new CommentEntity();
		commentEntity.setContent(dto.getContent());
		commentEntity.setStatus(dto.getStatus());
		return commentEntity;
	}
	
	public CommentDTO toDTO(CommentEntity entity) {
		CommentDTO commentDto = new CommentDTO();
		NewEntity newEntity = entity.getNewEntity();
		if(entity.getId() != 0) {
			commentDto.setId(entity.getId());
		}
		commentDto.setCreatedBy(entity.getCreatedBy());
		commentDto.setCreatedDate(entity.getCreatedDate());
		commentDto.setModifiedBy(entity.getModifiedBy());
		commentDto.setModifiedDate(entity.getModifiedDate());
		commentDto.setContent(entity.getContent());
		commentDto.setStatus(entity.getStatus());
		commentDto.setNewCode(newEntity.getId());
		List<CommentChildDTO> commentchildDTOS = new ArrayList<CommentChildDTO>();
		if(entity.getNewEntity() != null) {
			for(CommentChildEntity commentchildEntity: entity.getCommentChilds()) {
				commentchildDTOS.add(commentchildConverter.toDTO(commentchildEntity));
			}
			commentDto.setCommentchild(commentchildDTOS);
		}
		return commentDto;
	}
	
	public CommentEntity toEntity(CommentDTO dto, CommentEntity entity) {
		entity.setContent(dto.getContent());
		entity.setStatus(dto.getStatus());
		return entity;
	}
}
