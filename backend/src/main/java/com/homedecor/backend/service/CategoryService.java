package com.homedecor.backend.service;

import com.homedecor.backend.model.Category;
import com.homedecor.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // CREATE
    public String createCategory(Category category) {
        if (categoryRepository.existsByName(category.getName())) {
            return "Category already exists!";
        }
        categoryRepository.save(category);
        return "Category created successfully!";
    }

    // READ ALL
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // UPDATE
    public String updateCategory(Long id, Category newCategory) {
        return categoryRepository.findById(id)
                .map(category -> {
                    category.setName(newCategory.getName());
                    category.setDescription(newCategory.getDescription());
                    categoryRepository.save(category);
                    return "Category updated successfully!";
                })
                .orElse("Category not found!");
    }

    // DELETE
    public String deleteCategory(Long id) {
        if (!categoryRepository.existsById(id)) {
            return "Category not found!";
        }
        categoryRepository.deleteById(id);
        return "Category deleted successfully!";
    }
}
