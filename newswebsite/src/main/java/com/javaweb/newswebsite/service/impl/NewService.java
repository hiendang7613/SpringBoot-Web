package com.javaweb.newswebsite.service.impl;


import com.javaweb.newswebsite.converter.NewConverter;
import com.javaweb.newswebsite.dto.NewDTO;
import com.javaweb.newswebsite.entity.CategoryEntity;
import com.javaweb.newswebsite.entity.NewEntity;
import com.javaweb.newswebsite.repo.CategoryRepository;
import com.javaweb.newswebsite.repo.NewRepository;
import com.javaweb.newswebsite.service.INewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class NewService implements INewService {
    @Autowired
    private NewRepository newRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private NewConverter newConverter;

    @Override
    public NewDTO save(NewDTO dto) {
        CategoryEntity categoryEntity=categoryRepository.findCategoryByCode(dto.getCategoryCode()).get();
        NewEntity newEntity=new NewEntity();
        if(dto.getId() !=null){
            NewEntity oldNew= newRepository.findNewById(dto.getId()).get();
            oldNew.setCategory(categoryEntity);
            newEntity=newConverter.toEntity(dto,oldNew);
        }else {
            newEntity = newConverter.toEntity(dto);
            newEntity.setCategory(categoryEntity);
        }
        return newConverter.toDTO(newRepository.save(newEntity));
    }

    @Override
    public void delete(Long[] ids) {
        for (Long id:ids){
            newRepository.deleteById(id);
        }
    }
    @Override
    public List<NewDTO> findAll(Pageable pageable) {
        List<NewDTO> results = new ArrayList<>();
        List<NewEntity> entities = newRepository.findAll(pageable).getContent();
        for (NewEntity item: entities) {
            NewDTO newDTO = newConverter.toDTO(item);
            results.add(newDTO);
        }
        return results;
    }

    @Override
    public List<NewDTO> findAllByStatus(Pageable pageable) {
        List<NewDTO> results = new ArrayList<>();
        List<NewEntity> entities = newRepository.findAllByStatus(pageable,1).getContent();
        for (NewEntity item: entities) {
            NewDTO newDTO = newConverter.toDTO(item);
            results.add(newDTO);
        }
        return results;
    }

    @Override
    public List<NewDTO> findAllByCategoryAndStatus(String categoryCode, Integer status) {
        List<NewDTO> results = new ArrayList<>();
        ;
        List<NewEntity> entities = categoryRepository.findCategoryByCode(categoryCode).get().getNews();
        for (NewEntity item: entities) {
            NewDTO newDTO = newConverter.toDTO(item);
            results.add(newDTO);
        }
        return results;
    }


    @Override
    public NewDTO findById(Long id) {
        NewEntity entity= newRepository.findNewById(id).get();
        return newConverter.toDTO(entity);
    }

    @Override
    public int totalItem() {
        return (int) newRepository.count();
    }

    @Override
    public List<NewDTO> findAllByCreatedDateBetween(Date publicationTimeStart, Date publicationTimeEnd) {
        List<NewDTO> results = new ArrayList<>();
        List<NewEntity> entities = newRepository.findAllByCreatedDateBetween(publicationTimeStart,publicationTimeEnd);
        for (NewEntity item: entities) {
            NewDTO newDTO = newConverter.toDTO(item);
            results.add(newDTO);
        }
        return results;
    }


}
