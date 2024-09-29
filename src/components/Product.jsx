import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const Product = ({ product }) => {
  // State to manage the wishlist
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (sku) => {
    setWishlist((prev) => {
      if (prev.includes(sku)) {
        // If the item is already in the wishlist, remove it
        return prev.filter((item) => item !== sku);
      } else {
        // If it's not in the wishlist, add it
        return [...prev, sku];
      }
    });
  };

  return (
    <div key={product.sku} className="group relative">
      <div className="relative aspect-w-3 aspect-h-4 bg-gray-800 overflow-hidden h-64">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-75 w-full h-full"
        />
        <button
          className="absolute top-2 right-2 p-2 bg-gray-900 bg-opacity-70 hover:bg-opacity-100 transition-colors duration-200 rounded-full"
          onClick={() => toggleWishlist(product.sku)}
        >
          <Heart className={`h-5 w-5 ${wishlist.includes(product.sku) ? 'fill-current text-red-500' : 'text-gray-300'}`} />
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-300">{product.title}</h3>
          <div className="mt-1 flex items-center">
            <p className="text-sm font-medium text-gray-100">
              ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="ml-2 text-sm text-red-400 line-through">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
      <button 
        className="mt-2 w-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-200 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
