module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/recommended',
    'prettier',
    'prettier/standard',
    'prettier/vue'
  ],
  plugins: ['standard', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { semi: false, singleQuote: true }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'vue/no-use-v-if-with-v-for': ['off'],
    'vue/component-name-in-template-casing': ['off'],
    eqeqeq: ['off'],
    'no-new': ['off']
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  }
}
