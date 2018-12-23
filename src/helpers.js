export const getDefaultCharacterFields = () => ({
  attributes: [],
  killConfirms: [],
  combos: [],
})

export const getCharacter = data => ({
  ...getDefaultCharacterFields(),
  ...data.markdownRemark.frontmatter,
})

export const getCharacters = data =>
  data.allMarkdownRemark.edges.map(({ node: { frontmatter, fields } }) => ({
    ...frontmatter,
    ...fields,
  }))
