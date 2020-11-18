package com.tvz.foodfinder.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegisterDTO {

    private String email;

    private String password;

    private String firstName;

    private String lastName;

}
