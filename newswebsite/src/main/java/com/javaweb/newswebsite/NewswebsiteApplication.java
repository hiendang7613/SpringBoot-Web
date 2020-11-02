package com.javaweb.newswebsite;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//exclude = {SecurityAutoConfiguration.class }
//tat' chuc nang tu dogn security va security cua trang actuator
@SpringBootApplication(exclude = {
		SecurityAutoConfiguration.class,
		ManagementWebSecurityAutoConfiguration.class})
public class NewswebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewswebsiteApplication.class, args);
	}


}
