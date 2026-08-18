function SearchFilter({ search, setSearch }) {
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Products"
            />
        </div>
    );
}

export default SearchFilter;