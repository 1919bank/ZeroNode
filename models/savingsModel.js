import mongoose from 'mongoose';

const savingsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        goalName: {
            type: String,
            required: true,
        },
        targetAmount: {
            type: Number,
            required: true,
        },
        currentAmount: {
            type: Number,
            default: 0,
        },
        dueDate: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Savings = mongoose.model('Savings', savingsSchema);
export default Savings;
