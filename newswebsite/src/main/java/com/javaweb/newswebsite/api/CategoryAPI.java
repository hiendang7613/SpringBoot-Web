package com.javaweb.newswebsite.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.javaweb.newswebsite.dto.CategoryDTO;
import com.javaweb.newswebsite.service.ICategoryService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryAPI {

    @Autowired
    private ICategoryService categoryService;

    @PostMapping(value = "/category")
    public CategoryDTO createCategory(@RequestBody CategoryDTO model) {
        model.setId(null);
        return categoryService.save(model);
    }

    @DeleteMapping(value = "/category")
    public ResponseEntity<?> deleteCategory(@RequestBody Long[] ids) {
        categoryService.delete(ids);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "/category/{id}")
    public CategoryDTO updateCategory(@RequestBody CategoryDTO model, @PathVariable("id") long id) {
        model.setId(id);
        return categoryService.save(model);

    }
    @GetMapping(value = "/category/{id}")
    public CategoryDTO getCategoryById(@PathVariable("id") Long id){
        return categoryService.findById(id);
    }
    @GetMapping(value = "/category")
    public List<CategoryDTO> getAllCategory(){
        return categoryService.findAll();
    }
}