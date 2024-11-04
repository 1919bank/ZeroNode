module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Use Babel to transform JavaScript files
    },
    globals: {
        'babel-jest': {
            useESM: true,
        },
    },
    testEnvironment: 'node', // Use Node environment for Jest tests
};
