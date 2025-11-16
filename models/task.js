// models/task.js
// Mongoose model for Task

const mongoose = require('mongoose');

/**
 * Task Schema
 * Defines the structure of a task document in the database
 */
const taskSchema = new mongoose.Schema({
  // Task title - required field
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  
  // Task description - optional
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  
  // Priority level
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  
  // Due date
  dueDate: {
    type: Date
  },
  
  // Current status
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Completed'],
    default: 'To Do'
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt
});

module.exports = mongoose.model('Task', taskSchema);