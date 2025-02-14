import React from "react";

const SearchBar = ({ search, setSearch }) => {
    return (
        <div>
        <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={setSearch}
        />
        </div>
    );
    }

export default SearchBar;