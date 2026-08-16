import Navbar from "./Navbar"
import ProductList from "./ProductList"
import ProductCard from "./ProductCard"
import ProductDetails from "./ProductDetails"
import Cart from "./Cart"
import SearchFilter from "./SearchFilter"
import ProtectedRoute from "./ProtectedRoute"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar />
            <SearchFilter />
            <ProductList />
            <ProductCard />
            <ProductDetails />
            <Cart />
            <ProtectedRoute />
        </>
    )
}

export default App