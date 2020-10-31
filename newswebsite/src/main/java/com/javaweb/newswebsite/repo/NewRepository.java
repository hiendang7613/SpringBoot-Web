package com.javaweb.newswebsite.repo;


import com.javaweb.newswebsite.entity.NewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NewRepository extends JpaRepository<NewEntity,Long> {
 Optional<NewEntity> findNewById(Long id);


}

