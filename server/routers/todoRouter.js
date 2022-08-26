const express = require("express");
const router = express.Router();
const {
  addTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  updateTodoStatus,
  deleteTodo,
} = require("../controllers/todoController");

// POST REQUESTS
router.post("/add", addTodo);

// PUT REQUEST
router.put("/update/:id", updateTodo);
router.put("/update/status/:id", updateTodoStatus);

// GET REQUESTS
router.get("/", getAllTodos);
router.get("/:id", getTodo);

// DELETE REQUESTS
router.delete("/delete/:id", deleteTodo);

module.exports = router;
