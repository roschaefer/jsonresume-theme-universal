import type { ResumeSchema } from '../resume'

import { html } from '../utils'

export const header = (resume: ResumeSchema) => {
  const { basics = {} } = resume
  const { name = '' } = basics
  const initials = name.split(' ').map((string) => string[0])

  return html`
    <header class="flex items-center mb-8 md:mb-11">
      <div
        class="mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3 py-[.6875rem]"
      >
        <div class="initial text-center pb-[0.1875rem]">${initials[0]}</div>
        <div class="text-center initial">${initials[1]}</div>
      </div>
      <h1 class="text-2xl font-semibold text-gray-750 pb-px">${name}</h1>
    </header>
  `
}
