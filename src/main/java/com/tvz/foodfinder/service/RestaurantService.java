package com.tvz.foodfinder.service;

import com.tvz.foodfinder.domain.Restaurant;
import com.tvz.foodfinder.domain.dto.RestaurantDTO;

import java.util.List;

public interface RestaurantService {

    Restaurant addRestaurant(Restaurant restaurant);

    Restaurant getRestaurant(Long id);

    List<RestaurantDTO> getAll();
}
