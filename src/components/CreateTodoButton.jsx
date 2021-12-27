import React from "react";
import "../styles/components/CreateTodoButton.css";

const CreateTodoButton = (props) => {

	const onClickButton = () => {
		props.setOpenModal(true)
	}

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton()}
        >
            +
        </button>
    );
};

export { CreateTodoButton };
