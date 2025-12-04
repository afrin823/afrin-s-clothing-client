import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product,handleProductDelete }) => {
  const {_id, name, price, category, photo } = product;

  return (
    <div className="max-w-sm border border-blue-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={photo}
        alt={name}
        className="w-full h-56 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-1">Category: {category}</p>
        <p className="text-blue-600 font-semibold text-lg">${price}</p>

        {/* Add to Cart Button */}
        <Link to={`/details/${_id}`} >
         <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
             View Details
         </button>
        </Link>
        <button onClick={()=> handleProductDelete(_id)} className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Delete
        </button>
        <Link to={`/update/${_id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Update
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
