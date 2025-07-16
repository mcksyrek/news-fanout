// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default await tseslint.config(
  [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
      rules: {
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        '@typescript-eslint/no-unused-vars': ['error', {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        }], 
      },
    },
  ]
);