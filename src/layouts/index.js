import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import {
  pageTitle, pageDescription, pageLink, pageImage, twitterHandle } from '../constants'

import './index.css'
import '../../static/fonts/stylesheet.css'

class TemplateWrapper extends React.Component {
  componentDidMount() {
    if (window) {
      window.intercomSettings = { app_id: 'c0joqpjh' };
      (function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', intercomSettings); } else { var d = document; var i = function () { i.c(arguments) }; i.q = []; i.c = function (args) { i.q.push(args) }; w.Intercom = i; function l() { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/c0joqpjh'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); } if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })()
    }
  }
  render() {
    const {children} = this.props;
    return (
      <div className="layout">
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
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
          <meta itemprop="headline" content={pageTitle} />
          <meta itemprop="description" content={pageDescription} />
          <meta itemprop="image" content={pageImage} />
        </Helmet>
        <Header />
        <div className="container" >
          {children()}
        </div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
