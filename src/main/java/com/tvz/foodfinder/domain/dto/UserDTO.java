package com.tvz.foodfinder.domain.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDTO {

    private Long id;

    private String email;

    private String firstName;

    private String lastName;

}
