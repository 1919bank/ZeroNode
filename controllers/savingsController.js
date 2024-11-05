import Savings from '../models/savingsModel.js';

// @desc Get all savings goals for a user
// @route GET /api/savings
// @access Private
export const getSavings = async (req, res) => {
    try {
        const savings = await Savings.find({ userId: req.user._id });
        res.status(200).json(savings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Create a new savings goal
// @route POST /api/savings
// @access Private
export const createSavings = async (req, res) => {
    const { goalName, targetAmount, dueDate } = req.body;

    try {
        const savings = new Savings({
            userId: req.user._id,
            goalName,
            targetAmount,
            dueDate,
        });

        const createdSavings = await savings.save();
        res.status(201).json(createdSavings);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Update a savings goal
// @route PUT /api/savings/:id
// @access Private
export const updateSavings = async (req, res) => {
    try {
        const updatedSavings = await Savings.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedSavings) {
            return res.status(404).json({ message: 'Savings goal not found' });
        }
        res.status(200).json(updatedSavings);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
