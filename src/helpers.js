export const getCharacter = data => data.markdownRemark.frontmatter

export const getCharacters = data =>
  data.allMarkdownRemark.edges.map(({ node: { frontmatter, fields } }) => ({
    ...frontmatter,
    ...fields,
  }))
