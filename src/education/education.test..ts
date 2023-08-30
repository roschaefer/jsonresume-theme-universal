import { pretty, htmlValidator } from '../utils'
import { education } from './education'
import { sample } from '../sample'
import { describe, expect, it } from 'vitest'

const render = pretty(education)

describe('education', () => {
  it('renders valid HTML', async () => {
    await expect(
      htmlValidator({ 'no-trailing-whitespace': 'off' }).validateString(
        education(sample),
      ),
    ).resolves.toMatchObject({
      errorCount: 0,
      results: [],
      valid: true,
      warningCount: 0,
    })
  })

  it('renders empty education sections', () => {
    expect(render({ education: [] })).toEqual('')
  })

  it('renders sample education section', async () => {
    expect(render(sample)).toMatchInlineSnapshot(`
      "<section class=\\"mt-8 first:mt-0\\">
        <div class=\\"break-inside-avoid-column\\">
          <h2
            class=\\"mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal\\"
          >
            EDUCATION
          </h2>

          <section class=\\"mb-4.5 break-inside-avoid\\">
            <header>
              <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\">
                <a href=\\"http://piedpiper.example.com\\" class=\\"group\\">
                  Pied Piper (Awesome compression company)
                  <span
                    class=\\"inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in\\"
                    >↗</span
                  >
                </a>
              </h3>
              <p class=\\"leading-normal text-md text-gray-650\\">
                <time datetime=\\"2013-12-01\\">Dec 2013</time> –
                <time datetime=\\"2014-12-01\\">Dec 2014</time> | CEO/President <br />
                Palo Alto, CA
              </p>
            </header>
            <p class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              Pied Piper is a multi-platform technology based on a proprietary
              universal compression algorithm that has consistently fielded high
              Weisman Scores™ that are not merely competitive, but approach the
              theoretical limit of lossless compression.
            </p>

            <ul>
              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                Build an algorithm for artist to detect if their music was violating
                copy right infringement laws
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                Successfully won Techcrunch Disrupt
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                Optimized an algorithm that holds the current world record for Weisman
                Scores
              </li>
            </ul>
          </section>
        </div>
      </section>
      "
    `)
  })

  it('renders education section with multiple items', async () => {
    const resume = {
      education: [
        {
          position: 'occaecat aute',
          location: 'Ut eu sit',
        },
        {
          location: 'elit esse sed fugiat nostrud',
          name: 'fugiat velit commodo non culpa',
        },
        {
          position: 'ea id enim minim',
          highlights: [
            'officia ut',
            'laboris',
            'veniam laboris amet Ut ullamco',
            'nulla amet dolor dolore culpa',
          ],
          url: 'https://OhcWYlhVKIhqB.ewhjJSBIKRznP+zK2iW9xlq5o2zYLVPlUTfxjxWQkO0eSdKRNdFgvbSezXREGIdAU.ouO8k',
          summary: 'dolor',
          location: 'deserunt voluptate dolore labore exercitation',
          name: 'proident',
          description: 'adipisicing magna',
        },
      ],
    }
    expect(render(resume)).toMatchInlineSnapshot(`
      "<section class=\\"mt-8 first:mt-0\\">
        <div class=\\"break-inside-avoid-column\\">
          <h2
            class=\\"mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal\\"
          >
            EDUCATION
          </h2>

          <section class=\\"mb-4.5 break-inside-avoid\\">
            <header>
              <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\"></h3>
              <p class=\\"leading-normal text-md text-gray-650\\">
                occaecat aute <br />
                Ut eu sit
              </p>
            </header>
            <p class=\\"mt-2.1 text-md text-gray-700 leading-normal\\"></p>
          </section>
        </div>

        <section class=\\"mb-4.5 break-inside-avoid\\">
          <header>
            <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\">
              fugiat velit commodo non culpa
            </h3>
            <p class=\\"leading-normal text-md text-gray-650\\">
              elit esse sed fugiat nostrud
            </p>
          </header>
          <p class=\\"mt-2.1 text-md text-gray-700 leading-normal\\"></p>
        </section>

        <section class=\\"mb-4.5 break-inside-avoid\\">
          <header>
            <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\">
              <a
                href=\\"https://OhcWYlhVKIhqB.ewhjJSBIKRznP+zK2iW9xlq5o2zYLVPlUTfxjxWQkO0eSdKRNdFgvbSezXREGIdAU.ouO8k\\"
                class=\\"group\\"
              >
                proident (adipisicing magna)
                <span
                  class=\\"inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in\\"
                  >↗</span
                >
              </a>
            </h3>
            <p class=\\"leading-normal text-md text-gray-650\\">
              ea id enim minim <br />
              deserunt voluptate dolore labore exercitation
            </p>
          </header>
          <p class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">dolor</p>

          <ul>
            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              officia ut
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              laboris
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              veniam laboris amet Ut ullamco
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              nulla amet dolor dolore culpa
            </li>
          </ul>
        </section>
      </section>
      "
    `)
  })
})
