// eslint-disable-next-line no-undef
module.exports = {
    roots: ['lib'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    setupFilesAfterEnv: ['./jest-setup.js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '/.*\\.tests?\\.(ts|tsx|js)$',
    moduleNameMapper: {},
};
