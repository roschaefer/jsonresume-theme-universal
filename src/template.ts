import type { ResumeSchema } from './resume'

import { head } from './head'
import { header } from './header'
import { projects } from './projects'
import { work } from './work'
import { education } from './education'
import { volunteer } from './volunteer'
import { html } from './utils'

export const template = (css: string) => (resume: ResumeSchema) => html`
  <!doctype html>
  <html lang="en">
    ${head(css)(resume)}
    <body>
      <main class="font-firago hyphens-manual bg-gray-100">
        <div
          class="p-6 mx-auto page max-w-2xl print:max-w-a4 md:max-w-a4 xsm:p-8 sm:p-9 md:p-16 bg-white"
        >
          ${header(resume)}
          <div class="columns-2 col-gap-md col-fill-auto">
            ${[work, education, projects, volunteer].map((templateFunction) =>
              templateFunction(resume),
            )}
          </div>
        </div>
      </main>
    </body>
  </html>
`
