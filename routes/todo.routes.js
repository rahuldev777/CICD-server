import express from "express";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todo.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Apply auth middleware to all todo routes
router.use(protect);

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

export default router;
