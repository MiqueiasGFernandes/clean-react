module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx,jsx}'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.{ts|tsx}$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1'
    }
}