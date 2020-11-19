package com.tvz.foodfinder.controller;

import com.tvz.foodfinder.domain.Restaurant;
import com.tvz.foodfinder.domain.dto.RestaurantDTO;
import com.tvz.foodfinder.service.RestaurantService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @PostMapping
    public ResponseEntity<Long> addRestaurant(@RequestBody Restaurant restaurant) {
        Restaurant created = restaurantService.addRestaurant(restaurant);
        return ResponseEntity.ok(created.getId());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRestaurant(@PathVariable Long id) {
        Restaurant restaurant = restaurantService.getRestaurant(id);
        return restaurant != null ? ResponseEntity.ok(restaurant) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<RestaurantDTO>> getAllRestaurants() {
        List<RestaurantDTO> restaurants = restaurantService.getAll();
        return ResponseEntity.ok(restaurants);
    }

}
