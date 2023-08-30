import type { ResumeSchema } from '../resume'

import { html } from '../utils'

export const head = (css: string) => (resume: ResumeSchema) => {
  const { basics = {} } = resume
  const { name, label } = basics
  const title = name ?? 'Resume'
  const keywords = name
    ? html`<meta name="keywords" content="resume,cv,${name}" />`
    : ''
  const description = label
    ? html`<meta name="description" content="${label}" />`
    : ''
  const author = name ? html`<meta name="author" content="${name}" />` : ''

  return html`
    <head>
      <meta charset="UTF-8" />
      ${description} ${keywords} ${author}
      <!-- <meta name="robots" content="noindex"> -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <!-- <link rel="preload" href="./fonts/FiraGO-Regular.latin.woff2" as="font" crossorigin="anonymous"> -->
      <style>
        ${css}
      </style>
      <title>${title}</title>
    </head>
  `
}
