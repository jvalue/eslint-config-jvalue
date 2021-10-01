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

### Prettier

**package.json** file:

```javascript
{
  "name": "PROJECT_NAME",
  "version": "PROJECT_VERSION",
  "prettier": "@jvalue/eslint-config-jvalue/.prettierrc.js",
  ...
}
```
