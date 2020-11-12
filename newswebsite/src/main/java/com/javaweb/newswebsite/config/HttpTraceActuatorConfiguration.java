package com.javaweb.newswebsite.config;

import org.springframework.boot.actuate.trace.http.HttpTraceRepository;
import org.springframework.boot.actuate.trace.http.InMemoryHttpTraceRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
 //@Profile("actuator-endpoints") /* if you want: register bean only if profile is set */
public class HttpTraceActuatorConfiguration {

    @Bean
    public HttpTraceRepository httpTraceRepository() {
        InMemoryHttpTraceRepository httptraces=new InMemoryHttpTraceRepository();
        httptraces.setCapacity(200);
        return httptraces;
    }

}
