// Inspired on: https://github.com/AntonioVdlC/html-template-tag/blob/main/src/index.ts
export const html = (
  literals: TemplateStringsArray,
  ...substs: Array<string | string[]>
): string => {
  return literals.raw.reduce((acc, lit, i) => {
    let subst = substs[i - 1]
    if (Array.isArray(subst)) {
      subst = subst.join('')
    }
    return acc + subst + lit
  })
}

const allStrings = (strs: (string | undefined | null)[]): strs is string[] => {
  return strs.every((str) => !!str)
}

export const optional = (
  literals: TemplateStringsArray,
  ...substitutions: (string | undefined | null)[]
): string => {
  if (!allStrings(substitutions)) {
    return ''
  }
  return html(literals, ...substitutions)
}
