import React, { useState } from "react";
import "./storeContent.css";

const products = [
  {
    id: 1,
    name: "Half Sleeve Shirt",
    price: "₹1500",
    category: "Clothing",
    description: "Comfortable half sleeve shirt made from organic cotton.",
    image:   "assets/img/shirt.png", 
  },
  {
    id: 2,
    name: "Ceramic Mug",
    price: "₹250",
    category: "Accessories",
    description: "Premium ceramic mug with eco-themed print.",
    image:   "assets/img/mug.png", 
  },
  {
    id: 3,
    name: "Shirt + Mug Combo",
    price: "₹1700",
    category: "Combo Offer",
    description: "Save ₹50 with this exclusive shirt and mug combo.",
    image:   "https://images.pexels.com/photos/32164897/pexels-photo-32164897/free-photo-of-rustic-succulent-plant-in-weathered-pot.jpeg", 
  },
];


const categories = ["All", "Accessories", "Cothing", "Combo Offer"];

const StoreContent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="store-wrapper">
      {/* Search & Category Filter */}
      <div className="store-controls">
        <input
          type="text"
          className="search-bar"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid and Detail Panel */}
      <div className={`store-content-row ${selectedProduct ? "with-detail" : ""}`}>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="product-detail">
            <div className="detail-header">
              <h2>Product Details</h2>
              <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
            </div>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="details-text">
              <h2>{selectedProduct.name}</h2>
              <h3>{selectedProduct.price}</h3>
              <p>{selectedProduct.description}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreContent;
