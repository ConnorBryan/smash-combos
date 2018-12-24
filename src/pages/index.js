import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import { Button, CharacterStrip, Input, Layout, Panel } from '../components'
import { getCharacters } from '../helpers'
import './index.scss'

export default class Master extends Component {
  state = {
    filter: '',
  }

  handleFilterChange = ({ target: { value: filter } }) =>
    this.setState({ filter })

  clearFilter = () => this.setState({ filter: '' })

  render() {
    const { data } = this.props
    const { filter } = this.state
    const characters = getCharacters(data)
    const matches = characters.filter(({ character }) =>
      character.toLowerCase().includes(filter.toLowerCase())
    )

    return (
      <Layout className="Master">
        <div className="Master-controls">
          <Input
            placeholder="Filter characters..."
            value={filter}
            onChange={this.handleFilterChange}
          />
        </div>
        <ul className="Master-characters">
          {matches.length > 0 ? (
            matches.map(
              ({
                slug,
                character,
                image,
                attributes,
                killConfirms,
                combos,
              }) => (
                <li key={character}>
                  <Link to={slug}>
                    <CharacterStrip
                      character={character}
                      image={image}
                      attributes={attributes}
                      killConfirms={killConfirms}
                      combos={combos}
                    />
                  </Link>
                </li>
              )
            )
          ) : (
            <Panel className="Master-characters-noMatch">
              <p>No characters match the filter {filter}.</p>
              <Button onClick={this.clearFilter}>Clear</Button>
            </Panel>
          )}
        </ul>
      </Layout>
    )
  }
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
            attributes
            killConfirms
            combos
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
