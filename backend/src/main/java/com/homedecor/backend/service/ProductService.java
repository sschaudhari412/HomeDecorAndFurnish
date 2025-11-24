package com.homedecor.backend.service;

import com.homedecor.backend.model.Product;
import com.homedecor.backend.repository.ProductRepository;
import com.homedecor.backend.model.Category;
import com.homedecor.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository,
                          CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    // CREATE PRODUCT
    public String createProduct(Product product) {

        if (!categoryRepository.existsById(product.getCategory().getId())) {
            return "Category does not exist!";
        }

        if (productRepository.existsByName(product.getName())) {
            return "Product name already exists!";
        }

        productRepository.save(product);
        return "Product created successfully!";
    }

    // GET ALL PRODUCTS
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // GET ONE PRODUCT
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // UPDATE PRODUCT
    public String updateProduct(Long id, Product newProduct) {
        return productRepository.findById(id)
                .map(product -> {

                    if (!categoryRepository.existsById(newProduct.getCategory().getId())) {
                        return "Invalid category!";
                    }

                    product.setName(newProduct.getName());
                    product.setDescription(newProduct.getDescription());
                    product.setPrice(newProduct.getPrice());
                    product.setStock(newProduct.getStock());
                    product.setCategory(newProduct.getCategory());

                    productRepository.save(product);
                    return "Product updated successfully!";
                })
                .orElse("Product not found!");
    }


    // DELETE PRODUCT
    public String deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            return "Product not found!";
        }
        productRepository.deleteById(id);
        return "Product deleted successfully!";
    }

    // UPDATE STOCK ONLY
    public String updateStock(Long productId, int newStock) {
        return productRepository.findById(productId)
                .map(product -> {
                    product.setStock(newStock);
                    productRepository.save(product);
                    return "Stock updated!";
                })
                .orElse("Product not found!");
    }

    // GET PRODUCTS BY CATEGORY
    public List<Product> getProductsByCategory(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }
}
