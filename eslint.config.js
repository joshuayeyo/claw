import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'

// Airbnb style guide
import airbnbBase from 'eslint-config-airbnb-base/rules/best-practices.js'
import airbnbStyle from 'eslint-config-airbnb-base/rules/style.js'
import airbnbTypeScript from 'eslint-config-airbnb-typescript'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: 'readonly',
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: reactPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...airbnbBase.rules,
      ...airbnbStyle.rules,
      ...airbnbTypeScript.rules,
      ...reactJsxRuntime.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용시 경고
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
    }
  }
)