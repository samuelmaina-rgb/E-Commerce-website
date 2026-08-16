import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center px-6 py-4">

                {/* Brand */}
                <div className="flex-1">
                    <Link to="/">
                        <h1 className="text-xl font-bold text-gray-900">
                            E-Commerce Store
                        </h1>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex flex-1 items-center justify-center gap-6">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-indigo-600"
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="text-gray-600 hover:text-indigo-600"
                    >
                        Products
                    </Link>

                    <Link
                        to="/cart"
                        className="text-gray-600 hover:text-indigo-600"
                    >
                        <ShoppingBag className="h-5 w-5" />
                    </Link>
                </div>

                {/* Login */}
                <div className="flex-1 text-right">
                    <Link
                        to="/login"
                        className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar; 
