import React, { useState } from "react";

type SearchProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            type="search"
            placeholder="Find products"
            aria-label="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
        ></input>
    );
};

export default Search;
