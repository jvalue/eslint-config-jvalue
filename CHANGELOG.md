# Changelog

## 1.2.0 (Upcoming)

- Make the existing rules more strict.
- Introduce a separate config for React.

### Update notices

- Previously, we used the packages `@vue/eslint-config-prettier`, `eslint-plugin-promise`, and `eslint-plugin-node`. You can (and should) uninstall them.
- If you are using React, you now need to change the "extends" clause in `.eslintrc.js` from `extends: '@jvalue/eslint-config-jvalue'` to extends: '@jvalue/eslint-config-jvalue/react'.

## 1.1.1 (2022-05-11)

- Include rules for `.tsx` files.

## 1.1.0 (2021-09-26)

- Introduce an eslint config for Vue.
- Update the Prettier config to avoid issues where Prettier merges settings of additional config files.

## 1.0.1 (2021-09-03)

This is the initial public release.
