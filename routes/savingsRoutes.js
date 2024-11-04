import express from 'express';

const router = express.Router();

// Define your routes here

// Example: Get all savings goals
router.get('/', (req, res) => {
    res.send('Get all savings goals');
});

export default router;
