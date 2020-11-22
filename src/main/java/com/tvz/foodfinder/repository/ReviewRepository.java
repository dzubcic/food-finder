package com.tvz.foodfinder.repository;

import com.tvz.foodfinder.domain.Restaurant;
import com.tvz.foodfinder.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findAllByRestaurantOrderByCreatedAtDesc(Restaurant restaurant);

    int countAllByRestaurant(Restaurant restaurant);

}
