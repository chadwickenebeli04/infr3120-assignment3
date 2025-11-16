// routes/index.js
// Main routes for the application

const express = require('express');
const router = express.Router();

/**
 * GET /
 * Home page route - displays splash/landing page
 */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'TaskFlow - Your Smart Task Manager',
    page: 'home'
  });
});

module.exports = router;