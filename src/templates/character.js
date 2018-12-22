import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { getCharacter } from '../helpers'
import './character.scss'

export default function Character({ data }) {
  const { character, image } = getCharacter(data)

  return (
    <section className="Character">
      <h1>{character}</h1>
      <Img fixed={image.childImageSharp.fixed} />
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
