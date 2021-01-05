module.exports = {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{ts,tsx,jsx}',
		'!<rootDir>/src/main/**/*',
		'!<rootDir>/src/presentation/components/**/*',
		'!<rootDir>/src/domain/**/*',
		'!<rootDir>/src/**/index.ts',
		'!<rootDir>/src/**/index.tsx',
		'!**/*.d.ts'
	],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	transform: {
		'.+\\.{ts|tsx}$': 'ts-jest'
	},
	preset: 'ts-jest/presets/js-with-babel',
	transform: {"\\.ts$": ['ts-jest']},
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		'\\.scss$': 'identity-obj-proxy'
	}
}