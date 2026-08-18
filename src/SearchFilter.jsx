function SearchFilter({ search, setSearch }) {
    return (
        <div className="mb-8 flex justify-center">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full max-w-xl rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
}

export default SearchFilter;