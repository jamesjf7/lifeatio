import React, { useState } from "react";

function Todo({ userLogin, listTask, setListTask }) {
    const [task, setTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (task === "") {
            alert("Please enter a task");
        } else {
            setListTask([
                ...listTask,
                {
                    id: Date.now(),
                    user_id: userLogin.id,
                    task: task,
                    date: new Date().toDateString(),
                    status: false,
                },
            ]);
            setTask("");
        }
    };

    const onDelete = (id) => {
        setListTask(listTask.filter((task) => task.id !== id));
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={onSubmit}>Add</button>
            </div>
            <br />
            <div>
                {/* show all todolist */}
                {listTask
                    .filter((task) => task.user_id === userLogin.id)
                    .map((item, index) => (
                        <div key={index}>
                            {item.task}
                            <button
                                onClick={() => {
                                    onDelete(item.id);
                                }}
                            >
                                X
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Todo;
