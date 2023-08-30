import { html, markdown } from '.'
import { duration } from '../utils'

export const tags = (tags: string[] | undefined) => {
  if (!(tags && tags.length > 0)) return ''
  return html`
    <div class="my-3.2 last:pb-1.5">
      <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
        ${tags.map(
          (tag) => html`
            <li
              class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200"
            >
              ${tag}
            </li>
          `,
        )}
      </ul>
    </div>
  `
}

export const list = (highlights: string[] | undefined) => {
  if (!(highlights && highlights.length > 1)) {
    return ''
  }
  return html`
    <ul>
      ${highlights.map(
        (highlight) => html`
          <li class="mt-2.1 text-md text-gray-700 leading-normal">
            <span
              class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px"
              >›</span
            >
            ${markdown(highlight)}
          </li>
        `,
      )}
    </ul>
  `
}

type SubHeader = {
  startDate: string | undefined
  endDate: string | undefined
  text: string | undefined
}
export const subHeader = ({ startDate, endDate, text }: SubHeader) => {
  const left = (startDate && duration(startDate, endDate)) || ''
  return [left, text].filter(Boolean).join(' | ')
}

export const link = (label: string, url: string | undefined) => {
  if (!url) {
    return label
  }
  return html`
    <a href="${url}" class="group">
      ${label}
      <span
        class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in"
        >↗</span
      >
    </a>
  `
}

export const namedSection = <T>(
  name: string,
  items: T[] | undefined,
  templateFunction: (item: T) => string,
): string => {
  if (!(items && items.length > 0)) {
    return ''
  }
  const [first, ...remaining] = items
  return html`
    <section class="mt-8 first:mt-0">
      <div class="break-inside-avoid-column">
        <h2
          class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal"
        >
          ${name}
        </h2>
        ${templateFunction(first)}
      </div>
      ${remaining.map(templateFunction)}
    </section>
  `
}
