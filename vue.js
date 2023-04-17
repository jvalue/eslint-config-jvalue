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
      files: ['*.ts', '*.vue'],
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
    {
      // This part of the config specifically targets Vue files only. It gets merged with the previous one.
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      env: {
        'vue/setup-compiler-macros': true,
      },
      extends: [
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': 'warn',

        // In Vue components and UI development in general, it is relatively common to first read/write an object (e.g. current State), then to make an HTTP request and then to assign some properties of this object based on the response.
        'require-atomic-updates': [
          'error',
          {
            allowProperties: true,
          },
        ],

        'vue/html-button-has-type': 'error',
        'vue/html-self-closing': [
          'warn',
          {
            html: {
              void: 'always',
              normal: 'never',
              component: 'always',
            },
          },
        ],
      },
    },
  ],
};
