import type { ResumeSchema } from '../resume'

import { html, subHeader, namedSection, link, list, optional } from '../utils'

export const education = (resume: ResumeSchema) => {
  return namedSection('EDUCATION', resume.education, (item) => {
    const {
      institution = '',
      startDate,
      endDate,
      studyType,
      area,
      url,
      score = '',
      courses,
    } = item

    const studied = optional`${studyType} in ${area}` || studyType
    return html`
      <section class="mb-4.5 break-inside-avoid">
        <header>
          <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
            ${link(institution, url)}
          </h3>
          <p class="leading-normal text-md text-gray-650">
            ${subHeader({ startDate, endDate, text: studied })}
            <br />
            Grade: ${score}
          </p>
        </header>
        ${list(courses)}
      </section>
    `
  })
}
