module.exports = {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{ts,tsx,jsx}',
		'!**/*.d.ts'
	],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	transform: {
		'.+\\.{ts|tsx}$': 'ts-jest'
	},
	preset: 'jest-puppeteer',
  transform: {"\\.ts$": ['ts-jest']},
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		'\\.scss$': 'identity-obj-proxy'
	}
}