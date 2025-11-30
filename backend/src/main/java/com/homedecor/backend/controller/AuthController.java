













package com.homedecor.backend.controller;

import com.homedecor.backend.jwt.JwtUtil;
import com.homedecor.backend.model.User;
import com.homedecor.backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;

    public AuthController(AuthService authService, JwtUtil jwtUtil) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
    }

    // ---------------- REGISTER ----------------
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        String result = authService.register(user);

        if (result.toLowerCase().contains("success")) {
            return ResponseEntity.ok(Map.of("message", result));
        } else {
            return ResponseEntity.badRequest().body(Map.of("error", result));
        }
    }

    // ---------------- LOGIN ----------------
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {

        User user = authService.login(loginRequest.getUsername(), loginRequest.getPassword());

        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid username or password"));
        }

        // Generate JWT using username + role
        String token = jwtUtil.generateToken(user.getUsername(), user.getRole());

        // Prepare RBAC response
        Map<String, Object> response = new HashMap<>();
        response.put("username", user.getUsername());
        response.put("role", user.getRole());
       // response.put("tokenType", "Bearer");
        response.put("token", token);

        return ResponseEntity.ok(response);
    }
}

