import { pretty, htmlValidator } from '../utils'
import { projects } from './projects'
import { sample } from '../sample'
import { describe, expect, it } from 'vitest'

const render = pretty(projects)

describe('projects', () => {
  it('renders valid HTML', async () => {
    await expect(
      htmlValidator({ 'no-trailing-whitespace': 'off' }).validateString(
        projects(sample),
      ),
    ).resolves.toMatchObject({
      errorCount: 0,
      results: [],
      valid: true,
      warningCount: 0,
    })
  })

  it('renders empty projects', () => {
    expect(render({ projects: [] })).toEqual('')
  })

  it('renders sample projects', async () => {
    expect(render(sample)).toMatchInlineSnapshot(`
      "<section class=\\"mt-8 first:mt-0\\">
        <div class=\\"break-inside-avoid-column\\">
          <h2
            class=\\"mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal\\"
          >
            PROJECTS
          </h2>

          <section class=\\"mb-4.5 break-inside-avoid\\">
            <header>
              <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\">
                <a href=\\"missdirection.example.com\\" class=\\"group\\">
                  Miss Direction (application)
                  <span
                    class=\\"inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in\\"
                    >↗</span
                  >
                </a>
              </h3>
              <p class=\\"leading-normal text-md text-gray-650\\">
                <time datetime=\\"2016-08-24\\">Aug 2016</time> –
                <time datetime=\\"2016-08-24\\">Aug 2016</time> | Team lead &#183;
                Designer
                <br />
                Smoogle
              </p>

              <div class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <p>A mapping engine that misguides you</p>
              </div>
            </header>

            <div class=\\"my-3.2 last:pb-1.5\\">
              <ul class=\\"flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6\\">
                <li
                  class=\\"px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200\\"
                >
                  GoogleMaps
                </li>

                <li
                  class=\\"px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200\\"
                >
                  Chrome Extension
                </li>

                <li
                  class=\\"px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200\\"
                >
                  Javascript
                </li>
              </ul>
            </div>

            <ul>
              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>Won award at AIHacks 2016</p>
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>Built by all women team of newbie programmers</p>
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>
                  Using modern technologies such as GoogleMaps, Chrome Extension and
                  Javascript
                </p>
              </li>
            </ul>
          </section>
        </div>
      </section>
      "
    `)
  })

  it('renders a list of projects', async () => {
    const resume = {
      projects: [
        {
          name: 'Miss Direction',
          description: 'A mapping engine that misguides you',
          highlights: [
            'Won award at AIHacks 2016',
            'Built by all women team of newbie programmers',
            'Using modern technologies such as GoogleMaps, Chrome Extension and Javascript',
          ],
          keywords: ['GoogleMaps', 'Chrome Extension', 'Javascript'],
          startDate: '2016-08-24',
          endDate: '2016-08-24',
          url: 'missdirection.example.com',
          roles: ['Team lead', 'Designer'],
          entity: 'Smoogle',
          type: 'application',
        },
        {
          entity: 'consequat in ut occaecat',
          endDate: '1661-01',
          name: 'anim',
          roles: ['deserunt esse'],
          type: 'sunt sint proident ad quis',
          keywords: ['occaecat in elit enim'],
          highlights: ['ut dolor eu', 'officia in', 'culpa', 'aute veniam id'],
          description: 'qui laboris amet',
          startDate: '2258-02-21',
          url: 'http://KbPBAHaWkP.ikdkz.l0SXyEfWWLPvdVvPgozCZ.X6R1vftoZepxmPkrJKBm',
        },
      ],
    }
    expect(render(resume)).toMatchInlineSnapshot(`
      "<section class=\\"mt-8 first:mt-0\\">
        <div class=\\"break-inside-avoid-column\\">
          <h2
            class=\\"mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal\\"
          >
            PROJECTS
          </h2>

          <section class=\\"mb-4.5 break-inside-avoid\\">
            <header>
              <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\">
                <a href=\\"missdirection.example.com\\" class=\\"group\\">
                  Miss Direction (application)
                  <span
                    class=\\"inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in\\"
                    >↗</span
                  >
                </a>
              </h3>
              <p class=\\"leading-normal text-md text-gray-650\\">
                <time datetime=\\"2016-08-24\\">Aug 2016</time> –
                <time datetime=\\"2016-08-24\\">Aug 2016</time> | Team lead &#183;
                Designer
                <br />
                Smoogle
              </p>

              <div class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <p>A mapping engine that misguides you</p>
              </div>
            </header>

            <div class=\\"my-3.2 last:pb-1.5\\">
              <ul class=\\"flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6\\">
                <li
                  class=\\"px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200\\"
                >
                  GoogleMaps
                </li>

                <li
                  class=\\"px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200\\"
                >
                  Chrome Extension
                </li>

                <li
                  class=\\"px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200\\"
                >
                  Javascript
                </li>
              </ul>
            </div>

            <ul>
              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>Won award at AIHacks 2016</p>
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>Built by all women team of newbie programmers</p>
              </li>

              <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
                <span
                  class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                  >›</span
                >
                <p>
                  Using modern technologies such as GoogleMaps, Chrome Extension and
                  Javascript
                </p>
              </li>
            </ul>
          </section>
        </div>

        <section class=\\"mb-4.5 break-inside-avoid\\">
          <header>
            <h3 class=\\"text-lg font-semibold text-gray-700 leading-snugish\\">
              <a
                href=\\"http://KbPBAHaWkP.ikdkz.l0SXyEfWWLPvdVvPgozCZ.X6R1vftoZepxmPkrJKBm\\"
                class=\\"group\\"
              >
                anim (sunt sint proident ad quis)
                <span
                  class=\\"inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in\\"
                  >↗</span
                >
              </a>
            </h3>
            <p class=\\"leading-normal text-md text-gray-650\\">
              <time datetime=\\"2258-02-21\\">Feb 2258</time> –
              <time datetime=\\"1661-01\\">Jan 1661</time> | deserunt esse
              <br />
              consequat in ut occaecat
            </p>

            <div class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <p>qui laboris amet</p>
            </div>
          </header>

          <div class=\\"my-3.2 last:pb-1.5\\">
            <ul class=\\"flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6\\">
              <li
                class=\\"px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200\\"
              >
                occaecat in elit enim
              </li>
            </ul>
          </div>

          <ul>
            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>ut dolor eu</p>
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>officia in</p>
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>culpa</p>
            </li>

            <li class=\\"mt-2.1 text-md text-gray-700 leading-normal\\">
              <span
                class=\\"absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px\\"
                >›</span
              >
              <p>aute veniam id</p>
            </li>
          </ul>
        </section>
      </section>
      "
    `)
  })
})
