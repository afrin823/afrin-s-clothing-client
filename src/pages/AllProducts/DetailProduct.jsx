import React from 'react';
import { useLoaderData } from 'react-router';

const DetailProduct = () => {
    const products = useLoaderData()
    return (
        <div className="max-w-3xl mx-auto mt-10  border-blue-600 rounded-lg shadow-lg overflow-hidden">
      {/* Product Image */}
      <img
        src={products.photo}
        alt={name}
        className="w-full h-96 object-cover"
      />

      {/* Product Info */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-1">Category: <span className="font-semibold">{products.category}</span></p>
        <p className="text-blue-600 font-bold text-2xl mb-4">${products.price}</p>
       

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    );
};

export default DetailProduct;