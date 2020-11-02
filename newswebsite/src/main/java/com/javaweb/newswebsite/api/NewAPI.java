package com.javaweb.newswebsite.api;

import com.javaweb.newswebsite.api.output.NewOutput;
import com.javaweb.newswebsite.dto.NewDTO;
import com.javaweb.newswebsite.service.INewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NewAPI {
    @Autowired
    private INewService newService;

    @GetMapping(value = "/new")
    public NewOutput showNew(@RequestParam("page") int page,
                             @RequestParam("limit") int limit,
                             @RequestParam(name = "sortBy", required = false, defaultValue = "ASC") String sortBy,
                             @RequestParam(name = "sortName", required = false, defaultValue = "title") String sortName,
                             HttpServletRequest request) {

        NewOutput model = new NewOutput();
        model.setPage(page);
        model.setSortName(sortName);
        model.setSortBy(sortBy);
        Pageable pageable;
        if (sortBy.equals("ASC")) {
            pageable = PageRequest.of(page - 1, limit,  Sort.by(model.getSortName()).ascending());
        } else {
            pageable =  PageRequest.of(page - 1, limit, Sort.by(model.getSortName()).descending());
        }
        model.setListResult(newService.findAll(pageable));
        model.setTotalItem(newService.totalItem());
        model.setTotalPage((int) Math.ceil((double) model.getTotalItem() / limit));
        return model;
    }
    @GetMapping(value = "/new/{id}")
    public NewDTO getEmployeeById(@PathVariable("id") Long id){
        return newService.findById(id);
    }

    @PostMapping(value = "/new")
    public ResponseEntity<NewDTO> createNew(@RequestBody NewDTO model) {

        return new ResponseEntity<>(newService.save(model), HttpStatus.CREATED);
    }
    @PutMapping(value = "/new")
    public ResponseEntity<NewDTO> updateNew(@RequestBody NewDTO model) {

        return new ResponseEntity<>(newService.save(model), HttpStatus.OK);
    }
    @DeleteMapping(value = "/new")
    public ResponseEntity<?> deleteNew(@RequestBody Long[] ids) {
        newService.delete(ids);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
