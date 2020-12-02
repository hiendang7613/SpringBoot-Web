package com.javaweb.newswebsite.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.javaweb.newswebsite.converter.CommentChildConverter;
import com.javaweb.newswebsite.dto.CommentChildDTO;
import com.javaweb.newswebsite.entity.CommentChildEntity;
import com.javaweb.newswebsite.entity.CommentEntity;
import com.javaweb.newswebsite.repo.CommentChildRepository;
import com.javaweb.newswebsite.repo.CommentRepository;
import com.javaweb.newswebsite.service.ICommentChildService;

@Service
public class CommentChildService implements ICommentChildService {
	
	@Autowired
	private CommentChildRepository commentChildRepository;
	
	@Autowired
	private CommentChildConverter commentChildConverter;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Override
	public CommentChildDTO save(CommentChildDTO commentChildDto) {
		CommentEntity commentEntity = commentRepository.findCommentById(commentChildDto.getCommentCode()).get();
		CommentChildEntity newCommentchildEntity = new CommentChildEntity();
		if(commentChildDto.getId() != null) {
			CommentChildEntity oldCommentchildEntity = commentChildRepository.findCommentchildById(commentChildDto.getId()).get();
			oldCommentchildEntity.setCommentEntity(commentEntity);
			newCommentchildEntity = commentChildConverter.toEntity(commentChildDto, oldCommentchildEntity);
		}
		else {
			newCommentchildEntity = commentChildConverter.toEntity(commentChildDto);
			newCommentchildEntity.setCommentEntity(commentEntity);
		
		}
		return commentChildConverter.toDTO(commentChildRepository.save(newCommentchildEntity));
		
	}

	@Override
	public void delete(Long[] ids) {
		for(Long id : ids) {
		commentChildRepository.deleteById(id);
		}
	}

	@Override
	public List<CommentChildDTO> findALL(Pageable pageable) {
		List<CommentChildDTO> results = new ArrayList<>();
        List<CommentChildEntity> entities = commentChildRepository.findAll(pageable).getContent();
        for (CommentChildEntity item: entities) {
        	CommentChildDTO commentchildDTO = commentChildConverter.toDTO(item);
            results.add(commentchildDTO);
        }
        return results;
	}

	@Override
	public CommentChildDTO findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
