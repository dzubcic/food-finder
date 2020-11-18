package com.tvz.foodfinder.service.mapper;

import com.tvz.foodfinder.domain.User;
import com.tvz.foodfinder.domain.dto.RegisterDTO;
import com.tvz.foodfinder.domain.dto.UserDTO;
import org.springframework.stereotype.Component;

import org.springframework.security.crypto.password.PasswordEncoder; 

@Component
public class UserMapper {
  
    private final PasswordEncoder passwordEncoder;	

    public UserMapper(PasswordEncoder passwordEncoder) {
	this.passwordEncoder = passwordEncoder;
    }

    public User toEntity(RegisterDTO registerDTO) {
        return User.builder()
                .email(registerDTO.getEmail())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .firstName(registerDTO.getFirstName())
                .lastName(registerDTO.getLastName())
                .build();
    }

    public UserDTO toDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .build();
    }

}
