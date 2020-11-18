package com.tvz.foodfinder.security;

import com.tvz.foodfinder.domain.User;
import com.tvz.foodfinder.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetails implements UserDetailsService {

    private final UserRepository userRepository;

    public JwtUserDetails(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User with email '%s' not found"));

        return org.springframework.security.core.userdetails.User//
                .withUsername(email)//
                .password(user.getPassword())//
                .accountExpired(false)//
                .accountLocked(false)//
                .credentialsExpired(false)//
                .authorities(new SimpleGrantedAuthority("USER"))
                .disabled(false)//
                .build();
    }

}
