import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import {
  pageTitle, pageDescription, pageLink, pageImage, twitterHandle } from '../constants'

import './index.css'
import '../../static/fonts/stylesheet.css'

const TemplateWrapper = ({ children }) => (
  <div className="layout">
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={ pageDescription } />
      <meta property="og:url" content={pageLink} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={pageTitle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta property="og:url" content={pageLink} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta itemprop="headline" content={pageTitle}/ >
      <meta itemprop="description" content={pageDescription}/ >
      <meta itemprop="image" content={pageImage}/ >
    </Helmet>
    <Header />
    <div className="container" >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
