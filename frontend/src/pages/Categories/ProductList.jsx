// src/pages/Categories/ProductList.jsx
import React, { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import useCart from "../../hooks/useCart";
import productsData from "../../data/products";
import "./ProductList.css";

// Custom display names for sections
const SECTION_LABELS = {
  "sofas-recliners": "Sofas & Recliners",
  "tv-units": "TV Units & Cabinets",
  "center-side-tables": "Center & Side Tables",
  "beds": "Beds",
  "bedside-tables": "Bedside Tables",
  "wardrobes": "Wardrobes",
  "dressers": "Dressers",
  "dining-sets": "Dining Sets & Chairs",
  "study-office-tables": "Study & Office Tables",
};

export default function ProductList() {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const sectionRefs = useRef({});
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const categoryFromURL = pathParts[0];
  const subCategoryFromURL = pathParts[1];
  const sectionFromURL = pathParts[2];

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    if (sectionFromURL && sectionRefs.current[sectionFromURL]) {
      setTimeout(() => {
        sectionRefs.current[sectionFromURL].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [sectionFromURL, products]);

  const filtered = products.filter((p) => {
    const matchCategory = !categoryFromURL || p.category === categoryFromURL;
    const matchSubCategory =
      !subCategoryFromURL ||
      p.subcategory.replace(/\s+/g, "-").toLowerCase() ===
        subCategoryFromURL.toLowerCase();
    const matchSection =
      !sectionFromURL ||
      p.section.replace(/\s+/g, "-").toLowerCase() ===
        sectionFromURL.toLowerCase();
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchSubCategory && matchSection && matchQuery;
  });

  const sections = [...new Set(filtered.map((p) => p.section))];

  const formatText = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <div className="breadcrumb mb-3">
        <Link to="/">Home</Link>
        {categoryFromURL && (
          <>
            {" > "}
            <Link to={`/${categoryFromURL}`}>{formatText(categoryFromURL)}</Link>
          </>
        )}
        {subCategoryFromURL && <> {" > "}{formatText(subCategoryFromURL)}</>}
        {sectionFromURL && (
          <>
            {" > "}
            {SECTION_LABELS[sectionFromURL] || formatText(sectionFromURL)}
          </>
        )}
      </div>

      {/* Search */}
      <input
        className="form-control mb-4"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Group by Section */}
      {sections.map((section) => {
        const sectionKey = section.replace(/\s+/g, "-").toLowerCase();
        const items = filtered.filter((p) => p.section === section);

        if (items.length === 0) return null;

        return (
          <div
            key={section}
            ref={(el) => (sectionRefs.current[sectionKey] = el)}
            className="product-section mb-5"
          >
            <h3 className="section-heading mb-3">
              {SECTION_LABELS[section] || formatText(section)}
            </h3>

            <div className="row g-3">
              {items.map((product) => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                  <ProductCard product={product} onAdd={() => addItem(product)} />
                </div>
              ))}
            </div>

            <hr className="section-divider mt-4" />
          </div>
        );
      })}

      {filtered.length === 0 && (
        <div className="text-center text-muted p-5">No products found.</div>
      )}
    </div>
  );
}
