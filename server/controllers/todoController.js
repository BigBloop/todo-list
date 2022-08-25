const mongoose = require("mongoose");
const express = require("express");

const Todo = require("../models/todoModel");

// POST REQUESTS
const addTodo = async (req, res) => {
  const { todo, todo_desc } = req.body;

  const todo_item = await Todo.create({
    todo,
    todo_desc,
  });

  res.status(200).json({
    _id: todo_item.id,
    todo: todo,
  })
};

const updateTodo = (req, res) => {
  const { todo, todo_desc } = req.body;
  const updated_todo = await Todo.findOneAndUpdate({_id: req.id}, {todo, todo_desc});
  res.status(200).json(updated_todo);
}; 

// GET REQUESTS
const getAllTodos = async (_, res) => {
  const todos = await Todo.find({});
  res.status(200).json(todos);
};

const getTodo = async (req, res) => {
  const todo = await Todo.findById(req.id);
  res.status(200).json(todo);
};

// DELETE REQUESTS
const deleteTodo = async (req, res) => {
  await Todo.deleteOne({ _id: req.id});
  res.status(200);
}

module.exports = {
  addTodo,
  updateTodo,
  getAllTodos,
  getTodo,
  deleteTodo,
}