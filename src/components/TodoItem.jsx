import React from "react";
import "../styles/components/TodoItem.css";

const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <i
                className={`Icon Icon-check fas fa-check-circle fa-2x ${
                    props.completed && "Icon-check--active"
                }`}
                onClick={props.onComplete}
            ></i>
            <p
                className={`TodoItem-p ${
                    props.completed && "TodoItem-p--complete"
                }`}
            >
                {props.text}
            </p>
            <i
                className="fas fa-trash-alt fa-2x Icon-delete"
                onClick={props.onDelete}
            ></i>
        </li>
    );
};

export { TodoItem };
