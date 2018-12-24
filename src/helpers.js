export const getCharacters = data =>
  data.allMarkdownRemark.edges.map(({ node: { frontmatter, fields } }) => ({
    ...fields,
    ...frontmatter,
    attributes: JSON.parse(frontmatter.attributes),
    killConfirms: JSON.parse(frontmatter.killConfirms),
    combos: JSON.parse(frontmatter.combos),
  }))

export const getCharacter = data => ({
  ...data.markdownRemark.frontmatter,
  attributes: JSON.parse(data.markdownRemark.frontmatter.attributes),
  killConfirms: JSON.parse(data.markdownRemark.frontmatter.killConfirms),
  combos: JSON.parse(data.markdownRemark.frontmatter.combos),
})
