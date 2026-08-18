import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import SearchFilter from "../SearchFilter";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search,setSearch] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <h1>Loading products...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }
    const filteredProducts = products.filter((product)=>
    product.title.toLowerCase().includes(search.toLowerCase())
);

    return (
        <div>
            <h1>Products Page</h1>
            <SearchFilter
            search={search}
            setSearch={setSearch}
            />

            {filteredProducts.map((product) => (
    <ProductCard
        key={product.id}
        product={product}
    />
))}
        </div>
    );
}

export default Products;