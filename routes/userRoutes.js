import express from 'express';
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    authUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/').get(protect, getUsers).post(createUser);
router
    .route('/:id')
    .put(protect, updateUser)
    .delete(protect, deleteUser);

export default router;
