package com.javaweb.newswebsite.repo;

import com.javaweb.newswebsite.entity.CategoryEntity;
import com.javaweb.newswebsite.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<CategoryEntity,Long> {
    Optional<CategoryEntity> findCategoryByCode(String code);
}
