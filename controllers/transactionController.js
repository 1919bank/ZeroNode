import Transaction from '../models/transactionModel.js';

// @desc Get all transactions for a user
// @route GET /api/transactions
// @access Private
export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user._id });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Create a new transaction
// @route POST /api/transactions
// @access Private
export const createTransaction = async (req, res) => {
    const { type, amount, description, category } = req.body;

    try {
        const transaction = new Transaction({
            userId: req.user._id,
            type,
            amount,
            description,
            category,
        });

        const createdTransaction = await transaction.save();
        res.status(201).json(createdTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete a transaction
// @route DELETE /api/transactions/:id
// @access Private
export const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
