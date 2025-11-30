package com.homedecor.backend.repository;

import com.homedecor.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    
    boolean existsByName(String name); // to avoid duplicate categories
}
