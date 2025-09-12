////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import qubitConfig from '@qubit-ltd/eslint-config';
import vue from 'eslint-plugin-vue';
import babelParser from '@babel/eslint-parser';

export default [
  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'src-capacitor/**',
      'src-cordova/**',
      '.quasar/**',
      'node_modules/**',
      'quasar.config.*.temporary.compiled*',
    ],
  },

  // Apply qubit config to all files
  ...qubitConfig,

  // Global configuration for all files
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-transform-class-properties', { loose: true }],
          ],
        },
      },
      globals: {
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        // Vue compiler macros
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
    },
    rules: {
      'no-nested-ternary': 'off',
    },
  },

  // Vue configuration - use the recommended config
  ...vue.configs['flat/essential'],

  // Override Vue configuration
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: babelParser,
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-transform-class-properties', { loose: true }],
          ],
        },
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-nested-ternary': 'off',
    },
  },
];
