import { pretty, htmlValidator } from '../utils'
import { head } from './head'
import { sample } from '../sample'
import { describe, expect, it } from 'vitest'

const css = ''
const render = pretty(head(css))

describe('head', () => {
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
      "<head>
        <meta charset=\\"UTF-8\\" />
        <meta name=\\"description\\" content=\\"Programmer\\" />
        <meta name=\\"keywords\\" content=\\"resume,cv,Richard Hendriks\\" />
        <meta name=\\"author\\" content=\\"Richard Hendriks\\" />
        <!-- <meta name=\\"robots\\" content=\\"noindex\\"> -->
        <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\" />
        <meta http-equiv=\\"X-UA-Compatible\\" content=\\"ie=edge\\" />
        <!-- <link rel=\\"preload\\" href=\\"./fonts/FiraGO-Regular.latin.woff2\\" as=\\"font\\" crossorigin=\\"anonymous\\"> -->
        <style></style>
        <title>Richard Hendriks</title>
      </head>
      "
    `)
  })
})
