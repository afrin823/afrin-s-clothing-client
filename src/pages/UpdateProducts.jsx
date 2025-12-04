import { useLoaderData } from "react-router-dom";


const UpdateProducts = () => {
    const products = useLoaderData();
    const {_id, name, price, category,photo} = products;

    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updateProduct = Object.fromEntries(formData.entries())
        console.log(updateProduct);

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log("update data", data);
        })
    }

    return (
         <div className="max-w-lg p-8 mx-auto mt-10 border border-blue-700 rounded shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-center">Update Product</h2>

            <form onSubmit={handleUpdateProduct} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
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
                        defaultValue={price}
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
                        defaultValue={category}
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
                        defaultValue={photo}
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

export default UpdateProducts;