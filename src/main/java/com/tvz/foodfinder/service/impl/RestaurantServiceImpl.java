package com.tvz.foodfinder.service.impl;

import com.tvz.foodfinder.domain.Restaurant;
import com.tvz.foodfinder.domain.dto.RestaurantDTO;
import com.tvz.foodfinder.repository.RestaurantRepository;
import com.tvz.foodfinder.service.RestaurantService;
import com.tvz.foodfinder.service.mapper.RestaurantMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final RestaurantMapper restaurantMapper;

    public RestaurantServiceImpl(RestaurantRepository restaurantRepository, RestaurantMapper restaurantMapper) {
        this.restaurantRepository = restaurantRepository;
        this.restaurantMapper = restaurantMapper;
    }

    @Override
    @Transactional
    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant getRestaurant(Long id) {
        return restaurantRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteRestaurant(Long id) {
        restaurantRepository.deleteById(id);
    }

    @Override
    public List<RestaurantDTO> getAll() {
        return restaurantRepository.findAll().stream().map(restaurantMapper::toDTO).collect(Collectors.toList());
    }

}
