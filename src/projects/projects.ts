import type { ResumeSchema } from '../resume'

import {
  html,
  subHeader,
  link,
  optional,
  list,
  tags,
  namedSection,
  markdown,
} from '../utils'

export const projects = (resume: ResumeSchema) => {
  return namedSection('PROJECTS', resume.projects, (project) => {
    const {
      name = '',
      description,
      startDate,
      endDate,
      url,
      type,
      roles = [],
      entity = '',
      keywords,
      highlights,
    } = project

    const header = html`${name}${optional` (${type})`}`
    return html`
      <section class="mb-4.5 break-inside-avoid">
        <header>
          <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
            ${link(header, url)}
          </h3>
          <p class="leading-normal text-md text-gray-650">
            ${subHeader({ startDate, endDate, text: roles.join(' &#183; ') })}
            <br />
            ${entity}
          </p>
          ${optional`
          <div class="mt-2.1 text-md text-gray-700 leading-normal">
          ${markdown(description)}
          </div>
        `}
        </header>
        ${tags(keywords)} ${list(highlights)}
      </section>
    `
  })
}
