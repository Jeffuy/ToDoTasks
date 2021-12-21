import React from "react";
import "../styles/components/CreateTodoButton.css";

const CreateTodoButton = () => {

	const onClickButton = (msg) => {
		alert(msg);
	}

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton("Create Todo Button Clicked")}
        >
            +
        </button>
    );
};

export { CreateTodoButton };
