package com.javaweb.newswebsite.ckfinder;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class IndexController {
    @RequestMapping("/ckfinder.html")
    public void index(HttpServletResponse response) {
        // Redirect to CKFinder's samples.
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Location", "/ckfinder/static/ckfinder.html");
        response.setStatus(302);
    }
}