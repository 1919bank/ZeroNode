import Transaction from '../models/transactionModel.js';

// @desc Get all transactions
// @route GET /api/transactions
// @access Public
export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Create a new transaction
// @route POST /api/transactions
// @access Public
export const createTransaction = async (req, res) => {
    const { userId, amount, type, description } = req.body;

    try {
        const newTransaction = await Transaction.create({
            userId,
            amount,
            type,
            description,
        });
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
