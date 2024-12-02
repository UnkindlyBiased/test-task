import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'], // Target TypeScript files
        languageOptions: {
            parser: tsParser, // Use TypeScript parser
            ecmaVersion: 2021, // Modern ECMAScript features
            sourceType: 'module' // Enable ES modules
        },
        plugins: {
            '@typescript-eslint': tsPlugin // Load TypeScript-specific rules
        },
        rules: {
            indent: ['error', 4], // Enforce 4 spaces for indentation
            'linebreak-style': ['error', 'unix'], // Enforce Unix-style line endings
            quotes: ['error', 'single'], // Enforce single quotes
            semi: ['error', 'always'], // Require semicolons
            'no-unused-vars': 'off', // Disable the base rule for unused variables
            '@typescript-eslint/no-unused-vars': ['warn'], // Use TypeScript's version
            '@typescript-eslint/no-explicit-any': 'warn', // Warn on `any` usage
            'no-console': 'off' // Allow `console.log` and similar
        }
    }
];
