//package com.homedecor.backend.controller;
//
//import com.homedecor.backend.model.Product;
//import com.homedecor.backend.service.ProductService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/products")
//public class ProductController {
//
//    private final ProductService productService;
//
//    public ProductController(ProductService productService) {
//        this.productService = productService;
//    }
//
//    // -------------------------------
//    // 🔒 ADMIN: CREATE PRODUCT
//    // -------------------------------
//    @PostMapping("/admin/create")
//    public ResponseEntity<?> createProduct(@RequestBody Product product) {
//
//        // ---------- VALIDATION ----------
//        if (product.getName() == null || product.getName().trim().isEmpty()) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Product name is required"));
//        }
//        if (product.getPrice() <= 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Price must be greater than 0"));
//        }
//        if (product.getStock() < 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Stock cannot be negative"));
//        }
//        if (product.getCategory().getId() == null) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Category ID is required"));
//        }
//
//        String result = productService.createProduct(product);
//        return ResponseEntity.ok(Map.of("message", result));
//    }
//
//    // -------------------------------
//    // 🔓 PUBLIC: GET ALL PRODUCTS
//    // -------------------------------
//    @GetMapping
//    public ResponseEntity<?> getAllProducts() {
//        return ResponseEntity.ok(productService.getAllProducts());
//    }
//
//    // -------------------------------
//    // 🔓 PUBLIC: GET ONE PRODUCT
//    // -------------------------------
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getProductById(@PathVariable Long id) {
//
//        // VALIDATION
//        if (id <= 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
//        }
//
//        return ResponseEntity.of(productService.getProductById(id));
//    }
//
//    // -------------------------------
//    // 🔓 PUBLIC: GET PRODUCTS BY CATEGORY
//    // -------------------------------
//    @GetMapping("/category/{categoryId}")
//    public ResponseEntity<?> getProductsByCategory(@PathVariable Long categoryId) {
//
//        if (categoryId <= 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Invalid category ID"));
//        }
//
//        return ResponseEntity.ok(productService.getProductsByCategory(categoryId));
//    }
//
//    // -------------------------------
//    // 🔒 ADMIN: UPDATE PRODUCT
//    // -------------------------------
//    @PutMapping("/admin/update/{id}")
//    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product product) {
//
//        if (id <= 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
//        }
//        if (product.getName() == null || product.getName().trim().isEmpty()) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Product name is required"));
//        }
//        if (product.getPrice() <= 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Price must be greater than 0"));
//        }
//        if (product.getStock() < 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Stock cannot be negative"));
//        }
//
//        String result = productService.updateProduct(id, product);
//        return ResponseEntity.ok(Map.of("message", result));
//    }
//
//    // -------------------------------
//    // 🔒 ADMIN: DELETE PRODUCT
//    // -------------------------------
//    @DeleteMapping("/admin/delete/{id}")
//    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
//
//        if (id <= 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
//        }
//
//        String result = productService.deleteProduct(id);
//        return ResponseEntity.ok(Map.of("message", result));
//    }
//
//    // -------------------------------
//    // 🔒 ADMIN: UPDATE STOCK
//    // -------------------------------
//    @PutMapping("/admin/stock/{id}")
//    public ResponseEntity<?> updateStock(@PathVariable Long id, @RequestParam int stock) {
//
//        if (id <= 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
//        }
//        if (stock < 0) {
//            return ResponseEntity.badRequest().body(Map.of("error", "Stock cannot be negative"));
//        }
//
//        String result = productService.updateStock(id, stock);
//        return ResponseEntity.ok(Map.of("message", result));
//    }
//}





package com.homedecor.backend.controller;

import com.homedecor.backend.model.Category;
import com.homedecor.backend.model.Product;
import com.homedecor.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // ------------------------------------------------------
    // 🔒 ADMIN: CREATE PRODUCT
    // ------------------------------------------------------
    @PostMapping("/admin/create")
    public ResponseEntity<?> createProduct(@RequestBody Map<String, Object> payload) {

        // ---------- VALIDATION ----------
        if (!payload.containsKey("name") || payload.get("name").toString().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Product name is required"));
        }
        if (!payload.containsKey("price") || Double.parseDouble(payload.get("price").toString()) <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Price must be greater than 0"));
        }
        if (!payload.containsKey("stock") || Integer.parseInt(payload.get("stock").toString()) < 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Stock cannot be negative"));
        }
        if (!payload.containsKey("categoryId")) {
            return ResponseEntity.badRequest().body(Map.of("error", "Category ID is required"));
        }

        // ---------- BUILD PRODUCT ----------
        Product product = new Product();
        product.setName(payload.get("name").toString());
        product.setDescription(payload.getOrDefault("description", "").toString());
        product.setPrice(Double.parseDouble(payload.get("price").toString()));
        product.setStock(Integer.parseInt(payload.get("stock").toString()));

        // ---------- SET CATEGORY ----------
        Long categoryId = Long.parseLong(payload.get("categoryId").toString());
        Category category = new Category();
        category.setId(categoryId);
        product.setCategory(category);

        // ---------- SERVICE CALL ----------
        String result = productService.createProduct(product);

        return ResponseEntity.ok(Map.of("message", result));
    }

    // ------------------------------------------------------
    // 🔓 PUBLIC: GET ALL PRODUCTS
    // ------------------------------------------------------
    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    // ------------------------------------------------------
    // 🔓 PUBLIC: GET ONE PRODUCT
    // ------------------------------------------------------
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {

        if (id <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
        }

        return ResponseEntity.of(productService.getProductById(id));
    }

    // ------------------------------------------------------
    // 🔓 PUBLIC: GET PRODUCTS BY CATEGORY
    // ------------------------------------------------------
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable Long categoryId) {

        if (categoryId <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid category ID"));
        }

        return ResponseEntity.ok(productService.getProductsByCategory(categoryId));
    }

    // ------------------------------------------------------
    // 🔒 ADMIN: UPDATE PRODUCT
    // ------------------------------------------------------
    @PutMapping("/admin/update/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Map<String, Object> payload) {

        if (id <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
        }

        // ---------- VALIDATION ----------
        if (!payload.containsKey("name") || payload.get("name").toString().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Product name is required"));
        }
        if (!payload.containsKey("price") || Double.parseDouble(payload.get("price").toString()) <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Price must be greater than 0"));
        }
        if (!payload.containsKey("stock") || Integer.parseInt(payload.get("stock").toString()) < 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Stock cannot be negative"));
        }
        if (!payload.containsKey("categoryId")) {
            return ResponseEntity.badRequest().body(Map.of("error", "Category ID is required"));
        }

        // ---------- BUILD UPDATED PRODUCT ----------
        Product updated = new Product();
        updated.setName(payload.get("name").toString());
        updated.setDescription(payload.getOrDefault("description", "").toString());
        updated.setPrice(Double.parseDouble(payload.get("price").toString()));
        updated.setStock(Integer.parseInt(payload.get("stock").toString()));

        Long categoryId = Long.parseLong(payload.get("categoryId").toString());
        Category category = new Category();
        category.setId(categoryId);
        updated.setCategory(category);

        // ---------- SERVICE CALL ----------
        String result = productService.updateProduct(id, updated);
        return ResponseEntity.ok(Map.of("message", result));
    }

    // ------------------------------------------------------
    // 🔒 ADMIN: DELETE PRODUCT
    // ------------------------------------------------------
    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {

        if (id <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
        }

        String result = productService.deleteProduct(id);
        return ResponseEntity.ok(Map.of("message", result));
    }

    // ------------------------------------------------------
    // 🔒 ADMIN: UPDATE STOCK
    // ------------------------------------------------------
    @PutMapping("/admin/stock/{id}")
    public ResponseEntity<?> updateStock(@PathVariable Long id, @RequestParam int stock) {

        if (id <= 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid product ID"));
        }
        if (stock < 0) {
            return ResponseEntity.badRequest().body(Map.of("error", "Stock cannot be negative"));
        }

        String result = productService.updateStock(id, stock);
        return ResponseEntity.ok(Map.of("message", result));
    }
}
