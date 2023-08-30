import type { ConfigData } from 'html-validate'

import { HtmlValidate } from 'html-validate'
export const htmlValidator = (extraRules?: ConfigData['rules']) =>
  new HtmlValidate({
    extends: ['html-validate:recommended'],
    rules: {
      // https://github.com/prettier/prettier/issues/5246
      'void-style': 'off',
      ...extraRules,
    },
  })
