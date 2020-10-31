package com.javaweb.newswebsite.service;


import com.javaweb.newswebsite.dto.NewDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface INewService {
    NewDTO save(NewDTO newDTO);
    void delete(Long[] ids);
     List<NewDTO> findAll(Pageable pageable);
        NewDTO findById(Long id);
     int totalItem();
}
