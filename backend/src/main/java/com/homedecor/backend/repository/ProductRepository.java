package com.homedecor.backend.repository;

import com.homedecor.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // optional helper methods
    List<Product> findByCategoryId(Long categoryId);

    boolean existsByName(String name);
}
