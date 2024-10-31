module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    'eslint --fix',
    'prettier --write',
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => [
    'prettier --write',
  ],
}
