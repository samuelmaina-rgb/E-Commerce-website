
function ProductCard({ product }) {
    return (
        <div className="border p-4">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain"
            />

            <h2 className="mt-3 font-semibold">
                {product.title}
            </h2>

            <p className="mt-2 font-bold">
                ${product.price}
            </p>
        </div>
    );
}

export default ProductCard;