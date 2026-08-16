import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
   <nav className="border-b bg-white">

    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        
        <div>
            <h1 className="text-xl font-bold text-gray-900">E-Commerce Store</h1>
        </div>

        
        <div className="flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart" className="relative flex items-center text-gray-600 hover:text-indigo-600">
            <ShoppingBag className="h-5 w-5" />
</Link>
        </div>

        
        <div>
            <Link to="/login">Login</Link>
        </div>

    </div>

</nav>
    )
}

export default Navbar 
