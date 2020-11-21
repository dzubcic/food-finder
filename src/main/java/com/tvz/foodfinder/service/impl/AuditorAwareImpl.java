package com.tvz.foodfinder.service.impl;

import com.tvz.foodfinder.domain.User;
import com.tvz.foodfinder.security.UserDetails;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AuditorAwareImpl implements AuditorAware<User> {

    @Override
    public Optional<User> getCurrentAuditor() {
        return Optional.of(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUser());
    }

}
