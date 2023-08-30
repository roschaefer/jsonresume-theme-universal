import { pretty, htmlValidator } from '../utils'
import { work } from './work'
import { sample } from '../sample'
import { describe, expect, it } from 'vitest'

const render = pretty(work)

describe('work', () => {
  it('renders valid HTML', async () => {
    await expect(
      htmlValidator({ 'no-trailing-whitespace': 'off' }).validateString(
        work(sample),
      ),
    ).resolves.toMatchObject({
      errorCount: 0,
      results: [],
      valid: true,
      warningCount: 0,
    })
  })

  it('renders empty work sections', () => {
    expect(render({ work: [] })).toEqual('')
  })

  it('renders sample work section', async () => {
    expect(render(sample)).toMatchInlineSnapshot(`
      "<section class=\\"mt-8 first:mt-0\\">
        <div class=\\"break-inside-avoid-column\\">
          <h2
            class=\\"mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal\\"
          >
            WORK
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
                <time datetime=\\"2014-12-01\\">Dec 2014</time> | CEO/President
                <br />
                Palo Alto, CA
              </p>
            </header>
            <div class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <p>
                Pied Piper is a multi-platform technology based on a proprietary
                universal compression algorithm that has consistently fielded high
                Weisman Scores™ that are not merely competitive, but approach the
                theoretical limit of lossless compression.
              </p>
            </div>

            <ul>
              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>
                  Build an algorithm for artist to detect if their music was violating
                  copy right infringement laws
                </p>
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>Successfully won Techcrunch Disrupt</p>
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>
                  Optimized an algorithm that holds the current world record for
                  Weisman Scores
                </p>
              </li>
            </ul>
          </section>
        </div>
      </section>
      "
    `)
  })

  it('renders work section with multiple items', async () => {
    const resume = {
      work: [
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
            WORK
          </h2>

          <section class=\\"mb-4.5 break-inside-avoid\\">
            <header>
              <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\"></h3>
              <p class=\\"leading-normal text-md text-gray-650\\">
                occaecat aute
                <br />
                Ut eu sit
              </p>
            </header>
            <div class=\\"mt-2.1 text-md text-gray-700 leading-normal\\"></div>
          </section>
        </div>

        <section class=\\"mb-4.5 break-inside-avoid\\">
          <header>
            <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\">
              fugiat velit commodo non culpa
            </h3>
            <p class=\\"leading-normal text-md text-gray-650\\">
              <br />
              elit esse sed fugiat nostrud
            </p>
          </header>
          <div class=\\"mt-2.1 text-md text-gray-700 leading-normal\\"></div>
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
              ea id enim minim
              <br />
              deserunt voluptate dolore labore exercitation
            </p>
          </header>
          <div class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
            <p>dolor</p>
          </div>

          <ul>
            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>officia ut</p>
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>laboris</p>
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>veniam laboris amet Ut ullamco</p>
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>nulla amet dolor dolore culpa</p>
            </li>
          </ul>
        </section>
      </section>
      "
    `)
  })
})
