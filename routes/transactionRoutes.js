import express from 'express';
import { getTransactions, createTransaction } from '../controllers/transactionController.js';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);
router.put('/:id', updateUser);  // Update user
router.delete('/:id', deleteUser);  // Delete user

export default router;
