import React from 'react'
import { graphql, Link } from 'gatsby'

import { Button, CharacterStrip, Grouping, Layout, Panel } from '../components'
import { getCharacter } from '../helpers'
import './character.scss'

export default function Character({ data }) {
  const { character, image, attributes, killConfirms, combos } = getCharacter(
    data
  )
  const hasAttributes = attributes.length > 0
  const hasKillConfirms = killConfirms.length > 0
  const hasCombos = combos.length > 0

  return (
    <Layout>
      <section className="Character">
        <CharacterStrip
          character={character}
          image={image}
          attributes={attributes}
          killConfirms={killConfirms}
          combos={combos}
        />
        <Grouping title="Attributes">
          {hasAttributes ? (
            attributes
          ) : (
            <Panel>This character has no listed attributes.</Panel>
          )}
        </Grouping>
        <Grouping title="Kill Confirms">
          {hasKillConfirms ? (
            killConfirms.map(({ input, light, medium, heavy }) => (
              <Panel key={input}>
                <h2>{input}</h2>
                <ul>
                  <li>Light - {light}</li>
                  <li>Medium - {medium}</li>
                  <li>Heavy - {heavy}</li>
                </ul>
              </Panel>
            ))
          ) : (
            <Panel>This character has no listed kill confirms.</Panel>
          )}
        </Grouping>
        <Grouping title="Combos">
          {hasCombos ? (
            combos.map(({ input, light, medium, heavy }) => (
              <Panel key={input}>
                <h2>{input}</h2>
                <ul>
                  <li>Light - {light}</li>
                  <li>Medium - {medium}</li>
                  <li>Heavy - {heavy}</li>
                </ul>
              </Panel>
            ))
          ) : (
            <Panel>This character has no listed combos.</Panel>
          )}
        </Grouping>
        <div className="Character-back">
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </div>
      </section>
    </Layout>
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
        attributes
        killConfirms
        combos
      }
    }
  }
`
