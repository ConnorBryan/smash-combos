import React from 'react'
import { graphql, Link } from 'gatsby'

import { CharacterStrip } from '../components'
import { getCharacter } from '../helpers'
import './character.scss'

export default function Character({ data }) {
  const { character, image } = getCharacter(data)

  return (
    <section className="Character">
      <CharacterStrip character={character} image={image} />
      <div className="Character-back">
        <Link to="/">Back</Link>
      </div>
    </section>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`
