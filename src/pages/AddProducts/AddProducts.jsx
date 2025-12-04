import React from 'react';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const handleAddProducts = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const productData = Object.fromEntries(formData.entries());

        // Send data to backend
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your product has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log("Server response:", data);
                form.reset();
            })

    };

    return (
        <div className="max-w-lg p-8 mx-auto mt-10 border border-blue-700 rounded shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-center">Add New Product</h2>

            <form onSubmit={handleAddProducts} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter product price"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter product category"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Product Photo URL</label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Enter product image URL"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <input
                    type="submit"
                    value="Add Product"
                    className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
                />
            </form>
        </div>
    );
};

export default AddProducts;
