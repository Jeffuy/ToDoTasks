import React from "react";
import "../styles/components/TodoSearch.css";

const TodoSearch = ({ setSearchValue, searchValue }) => {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="Search your To Do"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
};

export { TodoSearch };
