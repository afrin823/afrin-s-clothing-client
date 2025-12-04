import React from 'react';

const AddProducts = () => {
    const handleAddProducts = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const productsData = Object.fromEntries(formData.entries());

        console.log(productsData);

        
    }
    return (
        <div className="max-w-lg p-8 mx-auto mt-10 border border-blue-700 rounded shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-center">Add New Product</h2>

            <form onSubmit={handleAddProducts} className="space-y-4">
                {/* Product Name */}
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

                {/* Price */}
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

                {/* Category */}
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

                {/* Photo */}
                <div>
                    <label className="block mb-1 font-semibold">Product Photo</label>
                    <input
                        type="text"
                        name="photo"
                         className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProducts;