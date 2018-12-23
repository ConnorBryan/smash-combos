import React from 'react'
import { graphql, Link } from 'gatsby'

import { CharacterStrip, Layout } from '../components'
import { getCharacters } from '../helpers'
import './index.scss'

export default function Master({ data }) {
  const characters = getCharacters(data)

  return (
    <Layout>
      <ul>
        {characters.map(({ slug, character, image }) => (
          <li key={character}>
            <Link to={slug}>
              <CharacterStrip character={character} image={image} />
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            character
            image {
              publicURL
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
