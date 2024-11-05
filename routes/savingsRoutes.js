import express from 'express';
import { body } from 'express-validator';
import {
    getSavings,
    createSavings,
    updateSavings,
} from '../controllers/savingsController.js';

const router = express.Router();

router.get('/', getSavings);

router.post(
    '/',
    [
        body('goalName').not().isEmpty().withMessage('Goal name is required'),
        body('targetAmount').isFloat({ gt: 0 }).withMessage('Target amount must be greater than 0'),
    ],
    createSavings
);

router.put(
    '/:id',
    [
        body('goalName').optional().not().isEmpty().withMessage('Goal name must not be empty'),
        body('targetAmount')
            .optional()
            .isFloat({ gt: 0 })
            .withMessage('Target amount must be greater than 0'),
    ],
    updateSavings
);

export default router;
