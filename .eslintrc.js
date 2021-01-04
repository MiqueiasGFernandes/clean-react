module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx", 'tsx']
    }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "semi": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'tsx': 'never',
        'ts': 'never'
      },
    ],
  },
  settings: {
    'react': {
      'version': 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [{
    files: ['src/**']
  }]
};
