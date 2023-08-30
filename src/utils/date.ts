import { html } from '.'

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

export const date = (date: string) => {
  return html`<time datetime="${date}">${formatDate(date)}</time>`
}

export const duration = (startDate: string, endDate?: string) => {
  return html`${date(startDate)} – ${endDate ? date(endDate) : 'Present'}`
}
