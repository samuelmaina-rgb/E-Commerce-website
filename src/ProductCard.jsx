function ProductCard({ product }) {
    return (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
            
            <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain"
            />

            <h2 className="mt-4 font-semibold text-gray-900">
                {product.title}
            </h2>

            <p className="mt-2 text-lg font-bold text-indigo-600">
                ${product.price}
            </p>
        </div>
    );
}

export default ProductCard;