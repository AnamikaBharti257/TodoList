import React from 'react';
import { useState, useEffect } from 'react';
import "../App.css"

const TodoForm = () => {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [editId, setEditId] = useState(null);
    const [editTask, setEditTask] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch("http://localhost:5000/api/todos");
            const data = await response.json();
            setTodos(data);
        };

        fetchTodos();
    }, []);

    const addTask = async () => {
        if (task.trim() === "") {
            alert("Please enter a valid task");
            return;
        }
        const response = await fetch("http://localhost:5000/api/todos",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ task })
            }

        );
        const data = await response.json();
        console.log(data);
        setTodos(data.todos);
        setTask("");
    }

    const deleteTask = async (id) => {
        const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(data);

        setTodos(data.todos);
        // alert(data.message);
    }

    const toggleTask = async (id) => {
        const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "PUT"
        });

        const data = await response.json();
        console.log(data);
        setTodos(data.todos);
    }

    const editTodo = async (id) => {
        if (editTask.trim() === "") {
            alert("Task Cannot be Empty");
            return;
        }

        const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ task: editTask })
        });
        const data = await response.json();
        setTodos(data.todos);
        setEditId(null);
        setEditTask("");
    }

    const totalTask = todos.length;
    const completedTasks = todos.filter((todo) => todo.completed).length;
    const pendingTasks = totalTask - completedTasks;


    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;

        return true;
    });

    return (
        <div className="todo-container">
            <h2>My Todo List</h2>
            <div className="todo-stats">
                <p>Total:{totalTask}</p>
                <p>Completed: {completedTasks} </p>
                <p>Pending: {pendingTasks} </p>
            </div>
            <div className="todo-filters">
                <button
                    className={filter === "all" ? "active-filter" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={filter === "active" ? "active-filter" : ""}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>

                <button
                    className={filter === "completed" ? "active-filter" : ""}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>

            <div className="todo-input">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}>Add Task</button>
            </div>
            {filteredTodos.length === 0 ? (
                <p className='empty-message'>
                    {filter === "all" ? "No Task yet ! Add your First Task." : filter === "active" ? "No Active Task" : "No Completed Task"}
                </p>
            ) : (
                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <li key={todo._id} className="todo-item">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTask(todo.id)}
                            />

                            {editId === todo._id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editTask}
                                        onChange={(e) => setEditTask(e.target.value)}
                                    />

                                    <button onClick={() => editTodo(todo.id)}>
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className={todo.completed ? "completed" : ""}>
                                        {todo.task}
                                    </span>

                                    <button onClick={() => {
                                        setEditId(todo.id);
                                        setEditTask(todo.task);
                                    }}>
                                        Edit
                                    </button>
                                </>
                            )}

                            <button
                                className="delete-btn"
                                onClick={() => deleteTask(todo._id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default TodoForm