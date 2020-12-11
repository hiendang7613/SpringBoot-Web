package com.javaweb.newswebsite.service.impl;

import com.javaweb.newswebsite.dto.NewDTO;
import com.javaweb.newswebsite.entity.NewEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.javaweb.newswebsite.converter.CategoryConverter;
import com.javaweb.newswebsite.dto.CategoryDTO;
import com.javaweb.newswebsite.entity.CategoryEntity;
import com.javaweb.newswebsite.repo.CategoryRepository;
import com.javaweb.newswebsite.service.ICategoryService;

import java.util.ArrayList;
import java.util.List;

@Service

public class CategoryService implements ICategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryConverter categoryConverter;

    @Override
    public CategoryDTO save(CategoryDTO categoryDto) {

        CategoryEntity categoryEntity = new CategoryEntity();
        if (categoryDto.getId() != null) { // update
            CategoryEntity oldCategoryEntity = categoryRepository.findById(categoryDto.getId()).get();
            categoryEntity = categoryConverter.toEntity(categoryDto, oldCategoryEntity);
        } else { // insert
            categoryEntity = categoryConverter.toEntity(categoryDto);
        }
        categoryEntity = categoryRepository.save(categoryEntity);
        return categoryConverter.toDTO(categoryEntity);
    }

    @Override
    public void delete(Long[] ids) {
        for (Long id:ids){
            categoryRepository.deleteById(id);
        }

    }
    @Override
    public List<CategoryDTO> findAll() {
        List<CategoryDTO> results = new ArrayList<>();
        List<CategoryEntity> entities = categoryRepository.findAll();
        for (CategoryEntity item: entities) {
            CategoryDTO newDTO = categoryConverter.toDTO(item);
            results.add(newDTO);
        }
        return results;
    }

    @Override
    public CategoryDTO findById(Long id) {
        CategoryEntity entity= categoryRepository.findById(id).get();
        return categoryConverter.toDTO(entity);
    }
}