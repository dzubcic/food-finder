package com.tvz.foodfinder.service.mapper;

import com.tvz.foodfinder.domain.Restaurant;
import com.tvz.foodfinder.domain.dto.RestaurantDTO;
import org.springframework.stereotype.Component;

@Component
public class RestaurantMapper {

    public RestaurantDTO toDTO(Restaurant restaurant) {
        return RestaurantDTO.builder()
                .id(restaurant.getId())
                .name(restaurant.getName())
                .address(restaurant.getAddress())
                .category(restaurant.getCategory())
                .image(restaurant.getImage())
                .build();
    }

}
