package com.codewithnisaf.fullstackbackend.exception;

public class UserNotFoundExpectation extends RuntimeException{
    public UserNotFoundExpectation(Long id) {
        super("Could not found " + id);
    }
}
