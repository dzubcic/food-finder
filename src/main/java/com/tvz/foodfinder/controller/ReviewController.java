package com.tvz.foodfinder.controller;

import com.tvz.foodfinder.domain.Review;
import com.tvz.foodfinder.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/{restaurantId}")
    public ResponseEntity<List<Review>> getReviewsForRestaurant(@PathVariable Long restaurantId) {
        List<Review> reviews = reviewService.getAllReviews(restaurantId);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/{restaurantId}")
    public ResponseEntity<Review> addReview(@PathVariable Long restaurantId, @RequestBody String review) {
        Review created = reviewService.addReview(restaurantId, review);
        return ResponseEntity.ok(created);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok().build();
    }


}
