const User = require('../models/user');

// Add a new habit
const addHabit = async (req, res) => {
    const { name, description, target } = req.body;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newHabit = {
            name,
            description,
            target,
        };

        user.habits.push(newHabit);
        await user.save();

        res.status(201).json({ message: 'Habit added successfully', habits: user.habits });
    } catch (error) {
        res.status(500).json({ message: 'Error adding habit', error });
    }
};

// Get all habits for a user
const getHabits = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.habits);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching habits', error });
    }
};

// Mark a habit as completed
const completeHabit = async (req, res) => {
    const { habitId } = req.body;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const habit = user.habits.id(habitId);
        if (!habit) {
            return res.status(404).json({ message: 'Habit not found' });
        }

        if (habit.completed) {
            return res.status(400).json({ message: 'Habit is already completed' });
        }

        // Mark habit as completed
        habit.completed = true;

        // Add XP for completing the habit
        const xpEarned = 10; // XP earned per habit completion
        user.xp += xpEarned;

        // Check for level up
        const xpPerLevel = 100; // XP required to level up
        if (user.xp >= xpPerLevel) {
            user.level += 1;
            user.xp -= xpPerLevel; // Carry over remaining XP
        }

        await user.save();

        res.status(200).json({
            message: 'Habit marked as completed',
            habits: user.habits,
            xp: user.xp,
            level: user.level,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error completing habit', error });
    }
};
// Get user XP and level


module.exports = { addHabit, getHabits, completeHabit };
