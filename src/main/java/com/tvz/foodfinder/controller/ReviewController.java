package com.tvz.foodfinder.controller;

import com.tvz.foodfinder.domain.dto.ReviewDTO;
import com.tvz.foodfinder.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/{restaurantId}")
    public ResponseEntity<List<ReviewDTO>> getReviewsForRestaurant(@PathVariable Long restaurantId) {
        return ResponseEntity.ok().build();
    }


}
