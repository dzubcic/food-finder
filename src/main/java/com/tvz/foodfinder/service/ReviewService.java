package com.tvz.foodfinder.service;

import com.tvz.foodfinder.domain.Review;

import java.util.List;

public interface ReviewService {

    List<Review> getAllReviews(Long restaurantId);

    Review addReview(Long restaurantId, String review);

    void deleteReview(Long id);

}
