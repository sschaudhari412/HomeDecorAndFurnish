//package com.homedecor.backend.jwt;
//
//import com.homedecor.backend.model.User;
//import com.homedecor.backend.repository.UserRepository;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//@Component
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    private final JwtUtil jwtUtil;
//    private final UserRepository userRepository;
//
//    @Autowired
//    public JwtAuthenticationFilter(JwtUtil jwtUtil, UserRepository userRepository) {
//        this.jwtUtil = jwtUtil;
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    protected void doFilterInternal(
//            HttpServletRequest request,
//            HttpServletResponse response,
//            FilterChain filterChain
//    ) throws ServletException, IOException {
//
//        String token = getTokenFromHeader(request);
//
//        if (token != null && jwtUtil.validateToken(token)) {
//
//            String username = jwtUtil.getUsernameFromToken(token);
//
//            User user = userRepository.findByUsername(username);
//
//            if (user != null) {
//                UsernamePasswordAuthenticationToken auth =
//                        new UsernamePasswordAuthenticationToken(
//                                user, null, null
//                        );
//                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                // Set authentication
//                SecurityContextHolder.getContext().setAuthentication(auth);
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//
//    // Extract Bearer token
//    private String getTokenFromHeader(HttpServletRequest request) {
//        String header = request.getHeader("Authorization");
//
//        if (StringUtils.hasText(header) && header.startsWith("Bearer ")) {
//            return header.substring(7);
//        }
//
//        return null;
//    }
//}
















package com.homedecor.backend.jwt;

import com.homedecor.backend.repository.UserRepository;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    @Autowired
    public JwtAuthenticationFilter(JwtUtil jwtUtil, UserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        String token = getTokenFromHeader(request);

        if (StringUtils.hasText(token) && jwtUtil.validateToken(token)) {

            Claims claims = jwtUtil.getAllClaimsFromToken(token);
            String username = claims.getSubject();
            String role = claims.get("role", String.class);  // ROLE_ADMIN / ROLE_CUSTOMER

            // Create authority list
            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role);

            UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(
                            username,
                            null,
                            Collections.singletonList(authority)
                    );

            authentication.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request)
            );

            // Set authentication inside security context
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    private String getTokenFromHeader(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (StringUtils.hasText(header) && header.startsWith("Bearer ")) {
            return header.substring(7);
        }
        return null;
    }
}
