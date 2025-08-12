import React from 'react';


const Search = ( {searchTerm, setSearchTerm} ) => {      //destructoring props
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />

                <input type="text"
                placeholder="Search through thousands of Movies"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}       //This handler updates the searchTerm state whenever the user types in an input field.
                />
            </div>
        </div>
    )
};

export default Search;
