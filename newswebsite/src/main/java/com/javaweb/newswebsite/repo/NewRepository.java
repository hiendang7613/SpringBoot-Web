package com.javaweb.newswebsite.repo;


import com.javaweb.newswebsite.entity.NewEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface NewRepository extends JpaRepository<NewEntity,Long> {
 Optional<NewEntity> findNewById(Long id);
 List<NewEntity> findAllByCreatedDateBetween(
         Date publicationTimeStart,
         Date publicationTimeEnd);

 Page<NewEntity> findAllByStatus(Pageable var1,Integer status);
}

