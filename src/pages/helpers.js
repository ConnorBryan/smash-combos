export const getCharacters = data =>
  data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => frontmatter)
