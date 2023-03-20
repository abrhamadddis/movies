import React, { useState } from 'react';
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the search term
        console.log(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleInputChange} />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;