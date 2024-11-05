// jest.setup.js
import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

// Set MONGO_URI to MONGO_URI_TEST
process.env.MONGO_URI = process.env.MONGO_URI_TEST;
process.env.NODE_ENV = 'test'; // Ensure NODE_ENV is set to 'test'
