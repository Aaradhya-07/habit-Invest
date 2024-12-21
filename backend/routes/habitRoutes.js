const express = require('express');
const { addHabit, getHabits, completeHabit } = require('../controllers/habitController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new habit
router.post('/add', protect, addHabit);

// Get all habits
router.get('/', protect, getHabits);



// Mark a habit as completed
router.post('/complete', protect, completeHabit);

module.exports = router;
