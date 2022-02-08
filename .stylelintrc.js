module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-scss'],
  defaultSeverity: 'error',
  rules: {
    indentation: 2,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'at-rule-no-unknown': null,
  },
}
