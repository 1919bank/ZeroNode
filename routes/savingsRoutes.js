import express from 'express';
import { getSavings, createSavings } from '../controllers/savingsController.js';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getSavings);
router.post('/', createSavings);
router.put('/:id', updateUser);  // Update user
router.delete('/:id', deleteUser);  // Delete user

export default router;
