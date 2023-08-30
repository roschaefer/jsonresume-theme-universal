import type { ResumeSchema } from '../resume'

import {
  html,
  list,
  subHeader,
  namedSection,
  optional,
  link,
  markdown,
} from '../utils'

export const work = (resume: ResumeSchema) => {
  return namedSection('WORK', resume.work, (w) => {
    const {
      name = '',
      startDate,
      endDate,
      url,
      highlights,
      description,
      location = '',
      position,
      summary = '',
    } = w

    const companyName = optional`${name} (${description})` || name
    return html`
      <section class="mb-4.5 break-inside-avoid">
        <header>
          <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
            ${link(companyName, url)}
          </h3>
          <p class="leading-normal text-md text-gray-650">
            ${subHeader({ startDate, endDate, text: position })}
            <br />
            ${location}
          </p>
        </header>
        <div class="mt-2.1 text-md text-gray-700 leading-normal">
          ${markdown(summary)}
        </div>
        ${list(highlights)}
      </section>
    `
  })
}
