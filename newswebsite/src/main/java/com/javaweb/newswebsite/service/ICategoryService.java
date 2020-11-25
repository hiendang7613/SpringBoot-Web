package com.javaweb.newswebsite.service;

import com.javaweb.newswebsite.dto.CategoryDTO;

import java.util.List;

public interface ICategoryService {
    CategoryDTO save(CategoryDTO categoryDto);
    void delete(Long[] ids);
    List<CategoryDTO> findAll();
    CategoryDTO findById(Long id);
}
