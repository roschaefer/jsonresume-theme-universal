import { pretty, htmlValidator } from '../utils'
import { header } from './header'
import { sample } from '../sample'
import { describe, expect, it } from 'vitest'

const render = pretty(header)

describe('header', () => {
  it('renders valid HTML', async () => {
    await expect(
      htmlValidator().validateString(render(sample)),
    ).resolves.toMatchObject({
      errorCount: 0,
      results: [],
      valid: true,
      warningCount: 0,
    })
  })

  it('renders the name', async () => {
    expect(render(sample)).toMatchInlineSnapshot(`
      "<header class=\\"flex items-center mb-8 md:mb-11\\">
        <div
          class=\\"mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3 py-[.6875rem]\\"
        >
          <div class=\\"initial text-center pb-[0.1875rem]\\">R</div>
          <div class=\\"text-center initial\\">H</div>
        </div>
        <h1 class=\\"text-2xl font-semibold text-gray-750 pb-px\\">Richard Hendriks</h1>
      </header>
      "
    `)
  })
})
