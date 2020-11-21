package com.tvz.foodfinder.service.impl;

import com.tvz.foodfinder.repository.ReviewRepository;
import com.tvz.foodfinder.service.RestaurantService;
import com.tvz.foodfinder.service.ReviewService;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final RestaurantService restaurantService;

    public ReviewServiceImpl(ReviewRepository reviewRepository, RestaurantService restaurantService) {
        this.reviewRepository = reviewRepository;
        this.restaurantService = restaurantService;
    }
}
