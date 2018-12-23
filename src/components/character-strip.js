import React from 'react'
import Img from 'gatsby-image'

import { getDefaultCharacterFields } from '../helpers'
import './character-strip.scss'

export default function CharacterStrip(data) {
  const { character, image, killConfirms, combos } = {
    ...getDefaultCharacterFields(),
    ...data,
  }

  return (
    <section className="CharacterStrip">
      <div className="CharacterStrip-image">
        <Img fixed={image.childImageSharp.fixed} />
      </div>
      <div className="CharacterStrip-details">
        <h2 className="CharacterStrip-details-name">{character}</h2>
        <div className="CharacterStrip-details-stats">
          <div className="CharacterStrip-details-stats-shouter">
            <p>{killConfirms.length}</p>
            <p>Kill Confirms</p>
          </div>
          <div className="CharacterStrip-details-stats-shouter">
            <p>{combos.length}</p>
            <p>Combos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
