import React, { useState } from "react";
import "./storeContent.css";

const imageUrl =
  "https://images.pexels.com/photos/32164897/pexels-photo-32164897/free-photo-of-rustic-succulent-plant-in-weathered-pot.jpeg";

const products = [
  {
    id: 1,
    name: "Eco Tote Bag",
    price: "₹499",
    category: "Accessories",
    description: "Stylish, eco-friendly tote for everyday use.",
    image: imageUrl,
  },
  {
    id: 2,
    name: "Clay Water Bottle",
    price: "₹799",
    category: "Kitchen",
    description: "Traditional and healthy way to stay hydrated.",
    image: imageUrl,
  },
  {
    id: 3,
    name: "Bamboo Toothbrush",
    price: "₹149",
    category: "Personal Care",
    description: "Sustainable and biodegradable toothbrush.",
    image: imageUrl,
  },
  {
    id: 4,
    name: "Organic Cotton T-shirt",
    price: "₹899",
    category: "Clothing",
    description: "Soft, breathable, and planet-friendly.",
    image: imageUrl,
  },
];

const categories = ["All", "Accessories", "Kitchen", "Personal Care", "Clothing"];

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
