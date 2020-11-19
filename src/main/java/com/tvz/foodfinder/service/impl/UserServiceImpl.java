package com.tvz.foodfinder.service.impl;

import com.tvz.foodfinder.domain.User;
import com.tvz.foodfinder.domain.dto.RegisterDTO;
import com.tvz.foodfinder.domain.dto.UserDTO;
import com.tvz.foodfinder.exception.ExistingEmailException;
import com.tvz.foodfinder.exception.UserNotFoundException;
import com.tvz.foodfinder.repository.UserRepository;
import com.tvz.foodfinder.security.JwtTokenProvider;
import com.tvz.foodfinder.service.UserService;
import com.tvz.foodfinder.service.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    public UserServiceImpl(UserMapper userMapper, UserRepository userRepository, JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public String login(String email, String password) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        log.debug("Authenticated user: {}", email);
        return jwtTokenProvider.generateToken(authentication);
    }

    @Override
    @Transactional
    public UserDTO register(RegisterDTO registerDTO) {
        userRepository.findByEmail(registerDTO.getEmail()).ifPresent(existingEmail -> {
            throw new ExistingEmailException();
        });
        User user = userMapper.toEntity(registerDTO);
        user = userRepository.save(user);

        return userMapper.toDTO(user);
    }

    @Override
    public User getUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
    }
}
