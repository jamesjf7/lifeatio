import TextareaAutosize from "react-autosize-textarea";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

function TodoItem({ todos, setTodos, deleteTodo, updateTodo }) {
    return (
        <div className="">
            {todos.map((todo) => (
                <div key={todo.id} className="flex justify-between mt-3">
                    <div className="flex flex-1">
                        <Checkbox
                            className="mt-1"
                            animation="smooth"
                            color="primary-o"
                            onChange={async () => {
                                todo.complete = !todo.complete;
                                await updateTodo(todo);
                            }}
                            checked={todo.complete}
                        />
                        <TextareaAutosize
                            type="text"
                            className={`w-full rounded text-gray-700 leading-tight focus:outline-none focus:ring-gray-300 ${
                                todo.complete ? "line-through" : ""
                            }`}
                            value={todo.description}
                            onChange={async (e) => {
                                // change todo state
                                todo.description = e.target.value;
                                setTodos([...todos]);
                            }}
                            onBlur={async () => {
                                await updateTodo(todo);
                            }}
                        />
                    </div>
                    <div className="flex items-start mt-1 ml-2">
                        <button
                            className="btn btn-indigo btn-sm transform hover:-translate-y-0.5 hover:scale-120"
                            onClick={async () => {
                                await deleteTodo(todo.id);
                            }}
                        >
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoItem;
