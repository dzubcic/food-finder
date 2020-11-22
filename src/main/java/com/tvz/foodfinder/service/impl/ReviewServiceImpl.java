package com.tvz.foodfinder.service.impl;

import com.tvz.foodfinder.domain.Restaurant;
import com.tvz.foodfinder.domain.Review;
import com.tvz.foodfinder.repository.ReviewRepository;
import com.tvz.foodfinder.service.RestaurantService;
import com.tvz.foodfinder.service.ReviewService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final RestaurantService restaurantService;

    public ReviewServiceImpl(ReviewRepository reviewRepository, RestaurantService restaurantService) {
        this.reviewRepository = reviewRepository;
        this.restaurantService = restaurantService;
    }

    @Override
    public List<Review> getAllReviews(Long restaurantId) {
        Restaurant restaurant = restaurantService.getRestaurant(restaurantId);
        return reviewRepository.findAllByRestaurantOrderByCreatedAtDesc(restaurant);
    }

    @Override
    @Transactional
    public Review addReview(Long restaurantId, String review) {
        Restaurant restaurant = restaurantService.getRestaurant(restaurantId);
        Review newReview = new Review();
        newReview.setReview(review);
        newReview.setRestaurant(restaurant);
        return reviewRepository.save(newReview);
    }

    @Override
    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
