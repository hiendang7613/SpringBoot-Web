package com.javaweb.newswebsite.converter;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.javaweb.newswebsite.dto.CategoryDTO;
import com.javaweb.newswebsite.entity.CategoryEntity;
@Component
public class CategoryConverter {

    public CategoryEntity toEntity(CategoryDTO dto) {
        CategoryEntity entity = new CategoryEntity();
        entity.setName(dto.getName());
        entity.setCode(dto.getCode());

        return entity;
    }

    public CategoryDTO toDTO(CategoryEntity entity) {
        CategoryDTO dto = new CategoryDTO();
        if (entity.getId() != null) {
            dto.setId(entity.getId());
        }
        if (entity.getCode() != null) {
            dto.setCode(entity.getCode());
        }
        dto.setName(entity.getName());

        dto.setCreatedDate((Date) entity.getCreatedDate());
        dto.setCreatedBy(entity.getCreatedBy());
        dto.setModifiedDate((Date) entity.getModifiedDate());
        dto.setModifiedBy(entity.getModifiedBy());


        return dto;

    }

    public CategoryEntity toEntity(CategoryDTO dto, CategoryEntity entity) {
        entity.setCode(dto.getCode());
        entity.setName(dto.getName());

        return entity;
    }
}


