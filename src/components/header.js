import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { pageTitle } from '../constants'
import favicon from '../../static/icons/favicon.png';

const Header = () => (
  <header className="header">
    <Helmet>
      <link rel="icon" href={favicon} type="image/png" sizes="96x96" />
    </Helmet>
    <a href="/">{pageTitle}</a>
  </header>
)

export default Header
