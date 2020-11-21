package com.tvz.foodfinder.controller;

import com.tvz.foodfinder.domain.User;
import com.tvz.foodfinder.domain.dto.JwtRequestDTO;
import com.tvz.foodfinder.domain.dto.JwtResponseDTO;
import com.tvz.foodfinder.domain.dto.RegisterDTO;
import com.tvz.foodfinder.domain.dto.UserDTO;
import com.tvz.foodfinder.security.UserDetails;
import com.tvz.foodfinder.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<User> getUser() {
        User currentUser = ((UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUser();
        return ResponseEntity.ok(currentUser);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponseDTO> login(@RequestBody JwtRequestDTO jwtAuthRequest) {
        log.debug("REST request to login user: {}", jwtAuthRequest.getEmail());
        String token = userService.login(jwtAuthRequest.getEmail(), jwtAuthRequest.getPassword());
        return ResponseEntity.ok(new JwtResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO registerDTO) throws URISyntaxException {
        log.debug("REST request to register user: {}", registerDTO);
        UserDTO userDTO = userService.register(registerDTO);
        return ResponseEntity.created(new URI(userDTO.getId().toString())).body(userDTO);
    }

}
