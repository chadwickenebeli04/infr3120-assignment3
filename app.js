// app.js
// Main application file for TaskFlow
require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

// Import routes
const indexRouter = require('./routes/index');
const tasksRouter = require('./routes/tasks');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Set up view engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);

// 404 Error Handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Page Not Found',
    page: '404',
    url: req.url
  });
});

// Server Configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log(`🚀 TaskFlow Server Started`);
  console.log(`📡 Server running on port ${PORT}`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log('='.repeat(50));
});

module.exports = app;