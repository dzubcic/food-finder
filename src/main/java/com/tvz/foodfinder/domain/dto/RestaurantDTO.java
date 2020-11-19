package com.tvz.foodfinder.domain.dto;

import com.tvz.foodfinder.domain.Categories;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RestaurantDTO {

    private Long id;

    private String name;

    private Categories category;

    private String address;

    private String image;

}
