package com.tvz.foodfinder.service;

import com.tvz.foodfinder.domain.User;
import com.tvz.foodfinder.domain.dto.RegisterDTO;
import com.tvz.foodfinder.domain.dto.UserDTO;

public interface UserService {

    String login(String email, String password);

    UserDTO register(RegisterDTO registerDTO);

    User getUser();
}
