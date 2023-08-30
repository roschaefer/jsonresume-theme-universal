import type { ResumeSchema } from './resume'

import { template } from './template'
import { pretty } from './utils'
import css from './css/input.css'

export const pdfRenderOptions = { mediaType: 'print' }

export const render = (resume: ResumeSchema) => {
  return pretty(template(css))(resume)
}
