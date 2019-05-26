module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json'
        }
    },
    testMatch: ['**/test/spec/*.[tj]s?(x)']
};
