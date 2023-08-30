import { expect, it } from 'vitest'
import { htmlValidator } from './utils'
import { render } from './render'
import { sample } from './sample'

it('renders a resume', () => {
  expect(render(sample)).toMatchSnapshot()
})

it('renders valid HTML', async () => {
  await expect(
    htmlValidator({
      'no-trailing-whitespace': 'off',
      'doctype-style': 'off',
    }).validateString(render(sample)),
  ).resolves.toEqual({
    errorCount: 0,
    warningCount: 0,
    results: [],
    valid: true,
  })
})
