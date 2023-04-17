module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['*.js'],
      // For now, require .js files (like .eslintrc.js) only to be formatted using Prettier.
      plugins: ['prettier'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': 'warn',
      },
    },
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': 'warn',

        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'no-public',
          },
        ],
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            classes: ['field', 'constructor', 'method'],
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['class', 'interface', 'typeAlias'],
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',

        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        curly: 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': 'warn',
        eqeqeq: ['error', 'always', { null: 'never' }],
        'guard-for-in': 'error',
        'no-constructor-return': 'error',
        'no-else-return': 'error',
        'no-extra-bind': 'error',
        'no-lone-blocks': 'error',
        'no-new-wrappers': 'error',
        'no-nested-ternary': 'error',
        'no-restricted-globals': [
          'error',
          { name: 'parseInt', message: `Use 'Number.parseInt()' instead.` },
          { name: 'parseFloat', message: `Use 'Number.parseFloat()' instead.` },
        ],
        'no-self-compare': 'error',
        'no-throw-literal': 'error',

        // See https://github.com/typescript-eslint/typescript-eslint/issues/1041
        'no-unreachable': 'error',

        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-cycle': 'error',
        'import/no-unresolved': ['error'],
        'import/order': [
          'warn',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            warnOnUnassignedImports: true,
          },
        ],
        'no-unreachable-loop': 'error',
        radix: 'error',
        'require-atomic-updates': 'error',
        'sort-imports': [
          'warn',
          {
            ignoreDeclarationSort: true,
          },
        ],
        'spaced-comment': ['warn', 'always'],
        'valid-typeof': [
          'error',
          {
            requireStringLiterals: true,
          },
        ],
      },
    },
  ],
};
