// eslint.config.js

module.exports = {
  // Aquí irán las reglas y configuraciones generales de ESLint
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  // Especificar los archivos/directorios a ignorar
  ignores: [
    'node_modules/',
    '.cache/',
    'build/',
    '**/*.min.js',  // Ignorar archivos minificados, por ejemplo
  ],
  // Otras configuraciones que necesites
};
