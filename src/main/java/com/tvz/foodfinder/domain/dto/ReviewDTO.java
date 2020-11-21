package com.tvz.foodfinder.domain.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ReviewDTO {

    private String review;

    private UserDTO user;

    private LocalDateTime postedAt;

}
