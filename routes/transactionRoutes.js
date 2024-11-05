import express from 'express';
import { body } from 'express-validator';
import {
    getTransactions,
    createTransaction,
    deleteTransaction,
} from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getTransactions);
router.post(
    '/',
    protect,
    [
        body('type')
            .isIn(['income', 'expense'])
            .withMessage('Type must be either "income" or "expense"'),
        body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
        body('category').not().isEmpty().withMessage('Category is required'),
    ],
    createTransaction
);
router.delete('/:id', protect, deleteTransaction);

export default router;
