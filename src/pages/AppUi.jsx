import React from "react";
import { TodoContext } from "../context/AppContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";

const AppUi = () => {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>ERROR</p>}
                {loading && <p>Loading...</p>}
                {!loading && !searchedTodos.length && (
                    <p>Crea tu primer TODO</p>
                )}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            )}

            <CreateTodoButton 
			setOpenModal={setOpenModal}/>
        </>
    );
};

export default AppUi;
