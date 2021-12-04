import React, { useState, useEffect } from "react";
import axios from "axios";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        await axios.get("http://localhost:3001/api/v1/todos").then((res) => {
            setTodos(res.data);
        });
    }

    async function addTodo(todo) {
        await axios.post("http://localhost:3001/api/v1/todos", todo);
        await getTodos();
    }

    async function deleteTodo(id) {
        await axios.delete(`http://localhost:3001/api/v1/todos/${id}`);
        await getTodos();
    }

    async function updateTodo(todo) {
        await axios.put(`http://localhost:3001/api/v1/todos/${todo.id}`, todo);
        await getTodos();
    }

    return (
        <div className="p-8 shadow-lg rounded-lg bg-gray-50 border-2">
            <div className="handle cursor-move">
                <div className={`title font-bold text-lg mb-3`}>Todo List</div>
            </div>
            <TodoForm addTodo={addTodo} />
            <TodoItem
                todos={todos}
                setTodos={setTodos}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
