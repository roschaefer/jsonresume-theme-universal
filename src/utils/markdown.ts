import micromark from 'micromark'
import striptags from 'striptags'

export const markdown = <T extends string | undefined>(
  doc: T,
  stripTags = false,
) => {
  if (!doc) {
    return doc
  }
  const html = micromark(doc)
  return stripTags ? striptags(html) : html
}
