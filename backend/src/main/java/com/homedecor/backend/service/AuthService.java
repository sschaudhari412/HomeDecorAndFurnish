package com.homedecor.backend.service;

import com.homedecor.backend.model.User;
import com.homedecor.backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // REGISTER
    public String register(User user) {

        if (userRepository.existsByUsername(user.getUsername())) {
            return "Username already exists!";
        }

        if (userRepository.existsByEmail(user.getEmail())) {
            return "Email already taken!";
        }

        // encrypt password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // set default role
        if (user.getRole() == null) {
            user.setRole("ROLE_CUSTOMER");
        }

        userRepository.save(user);
        return "User registered successfully!";
    }

    // LOGIN
    public User login(String username, String rawPassword) {

        User user = userRepository.findByUsername(username);

        if (user == null) {
            return null;
        }

        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            return null;
        }

        return user;
    }
}
