import express from 'express';

const router = express.Router();

// Define your routes here

// Example: Get all transactions
router.get('/', (req, res) => {
    res.send('Get all transactions');
});

export default router;
