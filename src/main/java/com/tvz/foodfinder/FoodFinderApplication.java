package com.tvz.foodfinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class FoodFinderApplication {

    public static void main(String[] args) {
        SpringApplication.run(FoodFinderApplication.class, args);
    }

}
