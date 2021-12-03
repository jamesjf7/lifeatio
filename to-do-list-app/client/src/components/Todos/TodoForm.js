import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import TextareaAutosize from "react-autosize-textarea";

function TodoList({ addTodo }) {
    const [description, setDescription] = useState("");

    return (
        <form>
            <div className="flex mt-4">
                <TextareaAutosize
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="todo"
                    type="text"
                    placeholder="add todo ..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    type="button"
                    onClick={async () => {
                        const todo = {
                            description: description,
                        };
                        await addTodo(todo);
                        setDescription("");
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <FaPlus />
                </button>
            </div>
        </form>
    );
}

export default TodoList;
