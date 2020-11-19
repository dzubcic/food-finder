package com.tvz.foodfinder.controller;

import com.tvz.foodfinder.exception.ExistingEmailException;
import com.tvz.foodfinder.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<String> handleBadCredentialsException() {
        return new ResponseEntity<>("Invalid username/password provided!", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException() {
        return new ResponseEntity<>("Current user not found!", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ExistingEmailException.class)
    public ResponseEntity<String> handleExistingEmailExceptionException() {
        return new ResponseEntity<>("Email already exists!", HttpStatus.CONFLICT);
    }

}
