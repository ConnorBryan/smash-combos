import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import './footer.scss'

export default function Footer() {
  return (
    <section className="Footer">
      <p>
        <FontAwesomeIcon icon={faCopyright} /> 2019 SmashCombos. All rights
        reserved.
      </p>
    </section>
  )
}
