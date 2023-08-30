import type { ResumeSchema } from '../resume'

import { html, subHeader, namedSection, link, list, markdown } from '../utils'

export const volunteer = (resume: ResumeSchema) => {
  return namedSection('VOLUNTEER', resume.volunteer, (item) => {
    const {
      startDate,
      endDate,
      summary = '',
      position,
      highlights,
      url,
      organization = '',
    } = item

    return html`
      <section class="mb-4.5 break-inside-avoid">
        <header>
          <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
            ${link(organization, url)}
          </h3>
          <p class="leading-normal text-md text-gray-650">
            ${subHeader({ startDate, endDate, text: position })}
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
