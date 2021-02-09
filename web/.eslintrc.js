module.exports = {
  parser: '@babel/eslint-parser',

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },

  extends: ['prettier', 'preact', 'plugin:import/react'],
  plugins: ['import'],

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  rules: {
    'constructor-super': 'error',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'handle-callback-err': ['error', '^(err|error)$'],
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-negated-in-lhs': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    camelcase: 'off',
    eqeqeq: ['error', 'allow-null'],
    indent: ['error', 2],
    quotes: ['error', 'single', 'avoid-escape'],
    radix: 'error',
    yoda: ['error', 'never'],

    'import/no-unresolved': 'error',

    'react-hooks/exhaustive-deps': 'error',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};