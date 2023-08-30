import type { ResumeSchema } from '../resume'

import prettier from '@prettier/sync'

type TemplateFunction = (resume: ResumeSchema) => string

export const pretty = (
  templateFunction: TemplateFunction,
): TemplateFunction => {
  return (resume) =>
    prettier.format(templateFunction(resume), { parser: 'html' })
}
