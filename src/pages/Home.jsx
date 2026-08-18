import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-20 text-center">

            <h1 className="text-5xl font-bold text-gray-900">
                Welcome to Our Store
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
                Find great products at great prices.
                Browse our collection and find something you love.
            </p>

            <Link
                to="/products"
                className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
                Shop Now
            </Link>

        </div>
    );
}

export default Home;
