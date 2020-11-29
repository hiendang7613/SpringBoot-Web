package com.javaweb.newswebsite.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.javaweb.newswebsite.converter.CommentConverter;
import com.javaweb.newswebsite.dto.CommentDTO;
import com.javaweb.newswebsite.entity.CommentEntity;
import com.javaweb.newswebsite.entity.NewEntity;
import com.javaweb.newswebsite.repo.CommentRepository;
import com.javaweb.newswebsite.repo.NewRepository;
import com.javaweb.newswebsite.service.ICommentService;

@Service
public class CommentService implements ICommentService {
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private CommentConverter commentConverter;
	
	@Autowired
	private NewRepository newRepository;
	
	@Override
	public CommentDTO save(CommentDTO commentDto) {
		NewEntity newEntity = newRepository.findNewById(commentDto.getNewCode()).get();
		CommentEntity newCommentEntity = new CommentEntity();
		if(commentDto.getId() != null) {
			CommentEntity oldCommentEntity = commentRepository.findCommentById(commentDto.getId()).get();
			oldCommentEntity.setNewEntity(newEntity);
			newCommentEntity = commentConverter.toEntity(commentDto, oldCommentEntity);
		}
		else {
			newCommentEntity = commentConverter.toEntity(commentDto);
			newCommentEntity.setNewEntity(newEntity);
		}
		
		return commentConverter.toDTO(commentRepository.save(newCommentEntity));
	}

	@Override
	public void delete(Long[] ids) {
		for(Long id : ids) {
			commentRepository.deleteById(id);
		}
		
	}

	@Override
	public List<CommentDTO> findALL(Pageable pageable) {
		List<CommentDTO> results = new ArrayList<>();
        List<CommentEntity> entities = commentRepository.findAll(pageable).getContent();
        for (CommentEntity item: entities) {
            CommentDTO commentDTO = commentConverter.toDTO(item);
            results.add(commentDTO);
        }
        return results;
	}

	@Override
	public CommentDTO findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
