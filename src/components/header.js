import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { pageTitle } from '../constants'
import favicon from '../../static/icons/favicon.png';
import logo from '../../static/icons/logo.png';

const Header = () => (
  <header className="header">
    <Helmet>
      <link rel="icon" href={favicon} type="image/png" sizes="96x96" />
    </Helmet>
    <a href="/"><img src={logo} alt={pageTitle} className="logo" /></a>
  </header>
)

export default Header
