import React from 'react'

import Header from './Header'
import Footer from './Footer'
import './layout.scss'

export default function Layout({ children }) {
  return (
    <section className="Layout">
      <Header />
      <div className="Layout-content">{children}</div>
      <Footer />
    </section>
  )
}
