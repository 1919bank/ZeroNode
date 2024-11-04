import request from 'supertest';
import app from '../server.js'; // Import the app instance

describe('User API', () => {
    it('GET /api/users should return all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('POST /api/users should create a new user', async () => {
        const newUser = {
            name: "Test User",
            email: "testuser@example.com",
            password: "password123"
        };
        const res = await request(app).post('/api/users').send(newUser);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.name).toEqual(newUser.name);
        expect(res.body.email).toEqual(newUser.email);
    });
});
