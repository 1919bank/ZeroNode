import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server.js'; // Import your server setup file
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js'; // Import the generateToken utility

describe('User API', () => {
    // Clean up the database before each test
    beforeEach(async () => {
        await User.deleteMany();
    });

    // Disconnect mongoose after all tests are done
    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe('POST /api/users', () => {
        it('should create a new user with valid input', async () => {
            const res = await request(app)
                .post('/api/users')
                .send({
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    password: 'password123',
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('name', 'John Doe');
            expect(res.body).toHaveProperty('email', 'john.doe@example.com');
        });

        it('should return an error if the input is invalid', async () => {
            const res = await request(app)
                .post('/api/users')
                .send({
                    name: '',
                    email: 'invalidemail',
                    password: '123',
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body.errors.length).toBeGreaterThan(0);
        });
    });

    describe('PUT /api/users/:id', () => {
        it('should update an existing user', async () => {
            const user = await User.create({
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                password: 'password123',
            });

            const token = generateToken(user._id);

            const res = await request(app)
                .put(`/api/users/${user._id}`)
                .set('Authorization', `Bearer ${token}`)
                .send({ name: 'Jane Updated' });

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('name', 'Jane Updated');
        });

        it('should return 404 if user is not found', async () => {
            const token = generateToken('somevaliduserid');

            const res = await request(app)
                .put('/api/users/507f191e810c19729de860ea') // Using a dummy ID
                .set('Authorization', `Bearer ${token}`)
                .send({ name: 'Jane Updated' });

            expect(res.statusCode).toEqual(404);
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('should delete a user', async () => {
            const user = await User.create({
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                password: 'password123',
            });

            const token = generateToken(user._id);

            const res = await request(app)
                .delete(`/api/users/${user._id}`)
                .set('Authorization', `Bearer ${token}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message', 'User deleted successfully');
        });

        it('should return 404 if user is not found', async () => {
            const token = generateToken('somevaliduserid');

            const res = await request(app)
                .delete('/api/users/507f191e810c19729de860ea')
                .set('Authorization', `Bearer ${token}`);

            expect(res.statusCode).toEqual(404);
        });
    });
});
