package com.javaweb.newswebsite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class NewswebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewswebsiteApplication.class, args);
	}

}
