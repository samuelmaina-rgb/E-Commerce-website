import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import SearchFilter from "../SearchFilter";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

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
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-700">
                    Loading products...
                </h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-2xl font-semibold text-red-500">
                    Error: {error}
                </h1>
            </div>
        );
    }

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

            {/* Page Header */}
            <div className="mx-auto mb-10 max-w-7xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    Products
                </h1>

                <p className="mt-2 text-gray-500">
                    Browse our collection and find something you love.
                </p>
            </div>

            {/* Search */}
            <div className="mx-auto max-w-7xl">
                <SearchFilter
                    search={search}
                    setSearch={setSearch}
                />
            </div>

            {/* Results Count */}
            <div className="mx-auto mb-6 max-w-7xl">
                <p className="text-sm text-gray-500">
                    Showing {filteredProducts.length} products
                </p>
            </div>

            {/* Products Grid */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-700">
                        No products found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Try searching for something else.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Products;