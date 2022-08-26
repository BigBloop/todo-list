const mongoose = require("mongoose");
const express = require("express");

const Todo = require("../models/todoModel");

// POST REQUESTS
const addTodo = async (req, res) => {
  const { todo } = req.body;

  const todo_item = await Todo.create({
    todo,
  });

  res.status(200).json({
    todo: todo_item,
  });
};

// PUT REQUEST
const updateTodo = async (req, res) => {
  const { todo } = req.body;
  const todo_item = await Todo.findById(req.params.id);
  if (!todo_item)
    return res.status(200).json({ message: "Todo doesn't exist" });
  const updated_todo = await Todo.findOneAndUpdate(
    { _id: req.params.id },
    { todo }
  );
  res.status(200).json(updated_todo);
};

// GET REQUESTS
const getAllTodos = async (_, res) => {
  const todos = await Todo.find({});
  res.status(200).json(todos);
};

const getTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) todo = { message: "Todo doesn't exist" };
  res.status(200).json(todo);
};

// DELETE REQUESTS
const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(200).json({ message: "Todo doesn't exist" });
  await Todo.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: `Deleted todo with id: ${req.params.id}` });
};

module.exports = {
  addTodo,
  updateTodo,
  getAllTodos,
  getTodo,
  deleteTodo,
};
