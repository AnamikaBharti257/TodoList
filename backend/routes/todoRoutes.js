import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();


router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

router.post("/", async (req, res) => {
    try {
        const { task } = req.body;

        const newTodo = await Todo.create({
            task: task
        });

        res.status(201).json({
            message: "Task added successfully",
            todos: await Todo.find()
        });

    } catch (error) {
        res.status(500).json({
            message: "Error adding task",
            error: error.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({
            message: "Task deleted successfully",
            todos: await Todo.find()
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting task",
            error: error.message
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        todo.completed = !todo.completed;

        await todo.save();

        res.json({
            message: "Task status updated successfully",
            todos: await Todo.find()
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating task",
            error: error.message
        });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { task } = req.body;

        if (!task || task.trim() === "") {
            return res.status(400).json({
                message: "Task cannot be empty"
            });
        }

        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        todo.task = task;

        await todo.save();

        res.json({
            message: "Task updated successfully",
            todos: await Todo.find()
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating task",
            error: error.message
        });
    }
});

export default router;