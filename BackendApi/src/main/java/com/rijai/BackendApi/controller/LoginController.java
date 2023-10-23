package com.rijai.BackendApi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @RequestMapping("/api/login")
    public ResponseEntity<String> login() {
        return new ResponseEntity<>("Logged in successfully", HttpStatus.OK);
    }
}