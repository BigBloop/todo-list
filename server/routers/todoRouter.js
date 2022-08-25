const express = require("express");
const router = express.Router();
const {
  addTodo,
  updateTodo,
  getAllTodos,
  getTodo,
  deleteTodo,
} = require("../controllers/todoController");

// POST REQUESTS
router.post("/add", addTodo);
router.post("/update/:id", updateTodo);

// GET REQUESTS
router.get("/todos", getAllTodos);
router.get("/todos/:id", getTodo);

// DELETE REQUESTS
router.delete("/delete/:id", deleteTodo);

module.exports = router;
