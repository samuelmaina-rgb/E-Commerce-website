import { Link } from "react-router-dom";
function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`}>
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
        </Link>
        
    );
}

export default ProductCard;