import React from 'react'
import Img from 'gatsby-image'

import { getCharacters } from './helpers'
import './master.scss'

export default function Master({ data }) {
  const characters = getCharacters(data)

  return (
    <section className="Master">
      <ul>
        {characters.map(({ character, image }) => (
          <li key={character}>
            <Img fixed={image.childImageSharp.fixed} />
          </li>
        ))}
      </ul>
    </section>
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
        }
      }
    }
  }
`
