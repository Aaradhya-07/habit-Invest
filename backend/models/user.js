const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    progress: { type: Number, default: 0 }, // Habit progress, e.g., 0-100%
    target: { type: Number, required: true }, // Target level (e.g., 5 times per week)
    completed: { type: Boolean, default: false }, // Whether the habit is completed
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    habits: [habitSchema],
    xp: { type: Number, default: 0 }, // User's experience points
    level: { type: Number, default: 1 }, // User's current level
});


const User = mongoose.model('User', userSchema);

module.exports = User;
