export default [
    {
        ignores: ['coverage/', 'node_modules/']
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'no-unused-vars': ['warn']
        }
    }
];