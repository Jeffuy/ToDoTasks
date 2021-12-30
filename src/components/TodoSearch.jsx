import React from "react";
import { TodoContext } from "../context/AppContext";
import "../styles/components/TodoSearch.css";

const TodoSearch = () => {

	const { searchValue, setSearchValue } = React.useContext(TodoContext);

	

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="Search your To Do"
			value={searchValue}
            onChange={onSearchValueChange}
        />)
};

export { TodoSearch };
