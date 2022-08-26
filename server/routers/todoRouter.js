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

// PUT REQUEST
router.put("/update/:id", updateTodo);

// GET REQUESTS
router.get("/", getAllTodos);
router.get("/:id", getTodo);

// DELETE REQUESTS
router.delete("/delete/:id", deleteTodo);

module.exports = router;
