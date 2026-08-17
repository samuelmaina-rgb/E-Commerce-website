import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }

                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <div className="p-6">
            <img
                src={product.image}
                alt={product.title}
                className="h-64 w-full object-contain"
            />

            <h1 className="mt-4 text-2xl font-bold">
                {product.title}
            </h1>

            <p className="mt-2">
                {product.description}
            </p>

            <p className="mt-4 font-bold">
                ${product.price}
            </p>
        </div>
    );
}

export default ProductDetails;
