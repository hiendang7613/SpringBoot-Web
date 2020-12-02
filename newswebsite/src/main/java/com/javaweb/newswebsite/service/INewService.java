package com.javaweb.newswebsite.service;


import com.javaweb.newswebsite.dto.NewDTO;
import com.javaweb.newswebsite.entity.NewEntity;
import org.springframework.data.domain.Pageable;

import java.util.Date;
import java.util.List;

public interface INewService {
    NewDTO save(NewDTO newDTO);
    void delete(Long[] ids);
     List<NewDTO> findAll(Pageable pageable);
    List<NewDTO> findAllByStatus(Pageable pageable);
    List<NewDTO> findAllByCategoryAndStatus(String categoryCode,Integer status);
        NewDTO findById(Long id);
     int totalItem();
    List<NewDTO> findAllByCreatedDateBetween(
            Date publicationTimeStart,
            Date publicationTimeEnd);
}
