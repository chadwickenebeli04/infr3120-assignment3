// routes/tasks.js
// Task routes - handles all CRUD operations

const express = require('express');
const router = express.Router();
const Task = require('../models/task');

/**
 * GET /tasks
 * READ - Display all tasks
 */
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    
    res.render('tasks/index', {
      title: 'My Tasks',
      tasks: tasks,
      page: 'tasks'
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send('Error retrieving tasks');
  }
});

/**
 * GET /tasks/add
 * Display the form to create a new task
 */
router.get('/add', (req, res) => {
  res.render('tasks/add', {
    title: 'Add New Task',
    page: 'add-task'
  });
});

/**
 * POST /tasks/add
 * CREATE - Process the form and create a new task
 */
router.post('/add', async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      dueDate: req.body.dueDate,
      status: req.body.status
    });
    
    await newTask.save();
    console.log('Task created successfully:', newTask.title);
    
    res.redirect('/tasks');
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).send('Error creating task');
  }
});

/**
 * GET /tasks/edit/:id
 * Display the form to edit an existing task
 */
router.get('/edit/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if (!task) {
      return res.status(404).send('Task not found');
    }
    
    res.render('tasks/edit', {
      title: 'Edit Task',
      task: task,
      page: 'edit-task'
    });
  } catch (error) {
    console.error('Error fetching task for edit:', error);
    res.status(500).send('Error retrieving task');
  }
});

/**
 * POST /tasks/edit/:id
 * UPDATE - Process the form and update existing task
 */
router.post('/edit/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        dueDate: req.body.dueDate,
        status: req.body.status
      },
      { new: true, runValidators: true }
    );
    
    if (!updatedTask) {
      return res.status(404).send('Task not found');
    }
    
    console.log('Task updated successfully:', updatedTask.title);
    res.redirect('/tasks');
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).send('Error updating task');
  }
});

/**
 * GET /tasks/delete/:id
 * DELETE - Remove a task from the database
 */
router.get('/delete/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    
    if (!deletedTask) {
      return res.status(404).send('Task not found');
    }
    
    console.log('Task deleted successfully:', deletedTask.title);
    res.redirect('/tasks');
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).send('Error deleting task');
  }
});

module.exports = router;