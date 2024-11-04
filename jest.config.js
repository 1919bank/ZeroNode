export default {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.js'],
    globals: {
        'babel-jest': {
            useESM: true,
        },
    },
};
