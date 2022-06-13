# ESLint Config JValue

The eslint config reused across JValue projects.

## How to use

You essentially need to perform the following steps (they will be explained in more details in the following sections):

1. Install this package
2. Install required additional packages
3. Create a `.prettierrc.js` file
4. Create a `.eslintrc.js` file
5. Extend your `tsconfig.json` file

### Install this package

To install this package, simply run `npm install --save-dev @jvalue/eslint-config-jvalue`.

### Install required additional packages

This package provides three configs: One for plain TypeScript projects, one for Vue+TypeScript and one for React+TypeScript. Depending on which project you are working on, you need to install the following additional npm packages as devDependencies (i.e. using the `--save-dev` flag):

<table>
  <thead>
    <tr>
      <th>Project type</th>
      <th>Required packages</th>
    </tr>    
  </thead>

  <tbody>
    <tr>
      <td>TypeScript only</td>
      <td>
        <ul>
          <li><a href="https://www.npmjs.com/package/@typescript-eslint/eslint-plugin">@typescript-eslint/eslint-plugin</a></li>
          <li><a href="https://www.npmjs.com/package/@typescript-eslint/parser">@typescript-eslint/parser</a></li>
          <li><a href="https://www.npmjs.com/package/eslint">eslint</a></li>
          <li><a href="https://www.npmjs.com/package/eslint-config-prettier">eslint-config-prettier</a></li>
          <li><a href="https://www.npmjs.com/package/eslint-plugin-import">eslint-plugin-import</a></li>
          <li><a href="https://www.npmjs.com/package/eslint-plugin-prettier">eslint-plugin-prettier</a></li>
          <li><a href="https://www.npmjs.com/package/prettier">prettier</a></li>
        </ul>
        For copy-and-paste:
        <code>npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier</code>
      </td>
    </tr>
    <tr>
      <td>Vue+TypeScript</td>
      <td>
        You need the same packages as in the "TypeScript only" config, plus:
        <ul>
          <li><a href="https://www.npmjs.com/package/@vue/cli-plugin-eslint">@vue/cli-plugin-eslint</a></li>
          <li><a href="https://www.npmjs.com/package/@vue/eslint-config-typescript">@vue/eslint-config-typescript</a></li>
          <li><a href="https://www.npmjs.com/package/eslint-plugin-vue">eslint-plugin-vue</a></li>
        </ul>
        For copy-and-paste:
        <code>npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier @vue/cli-plugin-eslint @vue/eslint-config-typescript eslint-plugin-vue</code>
      </td>
    </tr>
    <tr>
      <td>React+TypeScript</td>
      <td>
        Are you using Create-React-App? Then you only need the following packages:
        <ul>
          <li><a href="https://www.npmjs.com/package/eslint-config-prettier">eslint-config-prettier</a></li>
          <li><a href="https://www.npmjs.com/package/eslint-plugin-prettier">eslint-plugin-prettier</a></li>
          <li><a href="https://www.npmjs.com/package/prettier">prettier</a></li>
        </ul>
        For copy-and-paste:
        <code>npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier</code>
        <br><br>
        <blockquote>
          If you are not using Create-React-App, then you additionally need to install <a href="https://www.npmjs.com/package/eslint-config-react-app">eslint-config-react-app</a>.
        </blockquote>        
      </td>
    </tr>
  </tbody>
</table>

> The list of packages you need may change in the future. We recommend you take a look at this list (and the release notes) whenever you upgrade to a newer version of `@jvalue/eslint-config-jvalue`.

### Create a `.prettierrc.js` file

After you have installed all packages, create a `.prettierrc.js` file with the following content:

```js
module.exports = require('@jvalue/eslint-config-jvalue/.prettierrc.js');
```

### Create a `.eslintrc.js` file

Finally, you need to create a `.eslintrc.js` file. Again, we distinguish plain TypeScript projects, projects using Vue+TypeScript, and projects using React+TypeScript.

#### File content for plain TypeScript projects

```js
module.exports = {
  extends: '@jvalue/eslint-config-jvalue',
};
```

#### File content for Vue+TypeScript projects

```js
module.exports = {
  extends: '@jvalue/eslint-config-jvalue/vue',
};
```

#### File content for React+TypeScript projects

```js
module.exports = {
  extends: '@jvalue/eslint-config-jvalue/react',
};
```

### Extend your `tsconfig.json` file

Finally, it is highly recommended that you add the following settings to the `compilerOptions` section of your `tsconfig.json` file:

```
"strict": true,
"noImplicitOverride": true,
"noUncheckedIndexedAccess": true,
"exactOptionalPropertyTypes": true,
"noFallthroughCasesInSwitch": true,
```

Now, you can finally start linting your project.

## Tips and tricks

### Overriding rules

In some cases, certain linter rules are not suitable for your project. Or, you want to use an additional rule. You can easily override certain rules in your `.eslintrc.js` using the `overrides` section in `.eslintrc.js`. An example:

```js
module.exports = {
  extends: '@jvalue/eslint-config-jvalue',
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'capitalized-comments': 'off',
      },
    },
  ],
};
```

Here, rule `capitalized-comments` is turned off for all `.ts` files.

### npm script

In a TypeScript or React+TypeScript project, add the following to the `scripts` section of your `package.json`:

```
"lint": "eslint src --max-warnings=0"
```

Now, when running `npm run lint`, your project files will get linted. (We assume that your project files are all stored in folder `src/`).

In a Vue+TypeScript project, use the following instead:

```
"lint": "vue-cli-service lint --no-fix --max-warnings=0"
```

### VSCode extensions

If you are using VSCode, we recommend to install the following extensions:

- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### VSCode auto formatting

When developing, you often don't want to spend time manually formatting your code. If you are using VSCode, you can automate this process. Create a new file `.vscode/settings.json` and paste the following:

<details>

```json
{
  "eslint.validate": ["typescript"],
  "typescript.preferences.importModuleSpecifier": "relative",
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": ["source.fixAll.format", "source.fixAll.eslint"]
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": ["source.fixAll.format", "source.fixAll.eslint"]
  },
  "[vue]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": ["source.fixAll.format", "source.fixAll.eslint"]
  }
}
```

</details>

Now, whenever you save a file, all automatically fixable linter errors will be fixed.

## Development

This section contains information regarding the development of this package. If you are only intending to use this package, but not to make changes to it, then you can skip this section.

### File structure

There are three files where our configs are stored: `index.js`, `react.js`, and `vue.js`. When a developer uses this package and writes `extends: '@jvalue/eslint-config-jvalue'`, then the index file is loaded. When using `extends: '@jvalue/eslint-config-jvalue/react'` or `extends: '@jvalue/eslint-config-jvalue/vue'`, the config found in `react.js` or `vue.js` is loaded.

You will notice that the rules found in these three files are in many places just copies (i.e. the list of rules in `index.js` is very similar to `react.js` and `vue.js`). This is mostly done to simplify the structure of this project. If you add a new rule, you probably need to add it to all three configs.

### Testing

Before publishing a new config, it is highly recommended that you test it in a project to determine if the config really matches your expectations. A suggestion: Create a new TypeScript/React/Vue project in a directory outside of `eslint-config-jvalue`. Here, you can import your local eslint config and test if it works properly.

To import the eslint config, you could simply symlink `eslint-config-jvalue` in your `package.json` using something like `"@jvalue/eslint-config-jvalue": "file:../(path-to-the-eslint-config-folder)"` as a devDependency. However, this might lead to issues in some setups. Instead, and in order to better predict the actual package structure, it is recommended to do the following:

1. In the `eslint-config-jvalue` folder, run `npm pack`. This will create a `.tgz` file.
2. In your test project, run `npm install --save-dev ../(path-to-the-eslint-config-folder)/the-tgz-file.tgz` (substituting `(path-to-the-eslint-config-folder)` with the actual path, and `the-tgz-file.tgz` with the name of the file created in the previous step)
3. Now, you can use this package like an external package and test whether it fulfills your expectations.
