import React from "react";
import { motion } from "framer-motion";

export const ProductCarousel = ({ products }) => {
  return (
    <div className="product-carousel-container">
      <h2 className="section-title">Nuestros Productos</h2>
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -products.length * 250 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="buy-btn">Comprar</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};