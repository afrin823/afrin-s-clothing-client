import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import Swal from 'sweetalert2';

const AllProducts = () => {
  const productsData = useLoaderData();
  const [products, setProducts] = useState(productsData);

  const handleProductDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const remainingData = products.filter(product => product._id !== id);
              setProducts(remainingData);
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          products.map(product => (
            <ProductCard
              product={product}
              key={product._id}
              handleProductDelete={handleProductDelete}
            />
          ))
        }
      </div>
    </div>
  );
};

export default AllProducts;
