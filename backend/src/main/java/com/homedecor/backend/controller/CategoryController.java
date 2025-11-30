package com.homedecor.backend.controller;

import com.homedecor.backend.model.Category;
import com.homedecor.backend.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // CREATE
    @PostMapping("/create")
    public ResponseEntity<?> createCategory(@RequestBody Category category) {
        String result = categoryService.createCategory(category);
        return ResponseEntity.ok(result);
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    // UPDATE
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCategory(
            @PathVariable Long id,
            @RequestBody Category category
    ) {
        String result = categoryService.updateCategory(id, category);
        return ResponseEntity.ok(result);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        String result = categoryService.deleteCategory(id);
        return ResponseEntity.ok(result);
    }
}
