import React from 'react'
import Link from 'gatsby-link'

import { pageTitle } from '../constants'

const Header = () => (
  <header className="header">
    <a href="/">{pageTitle}</a>
  </header>
)

export default Header
