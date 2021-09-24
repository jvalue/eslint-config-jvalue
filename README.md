# ESLint Config

The eslint config reused in JValue projects.

## How to use

Install via `npm install --save-dev @jvalue/eslint-config-jvalue`.

**.eslintrc** file:

### Typescript

```javascript
{
    "extends": "@jvalue/eslint-config-jvalue"
}
```

### VueJS

```javascript
{
    "extends": "@jvalue/eslint-config-jvalue/vue"
}
```


**.prettierrc.js** file:

```javascript
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  // Following options were added due to prettier searching recursively for .editorconfig files.
  // This means, that these configuration files can overwrite the default behaviour of prettier without notice.
  // For more see https://prettier.io/docs/en/api.html#prettierresolveconfigfilepath--options
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  endOfLine: 'lf',
};
```
