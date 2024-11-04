import Savings from '../models/savingsModel.js';

// @desc Get all savings goals
// @route GET /api/savings
// @access Public
export const getSavings = async (req, res) => {
    try {
        const savingsGoals = await Savings.find();
        res.status(200).json(savingsGoals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Create a new savings goal
// @route POST /api/savings
// @access Public
export const createSavings = async (req, res) => {
    const { userId, goalName, targetAmount, savedAmount } = req.body;

    try {
        const newSavings = await Savings.create({
            userId,
            goalName,
            targetAmount,
            savedAmount,
        });
        res.status(201).json(newSavings);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
