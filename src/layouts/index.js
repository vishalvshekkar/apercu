import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import '../../static/CourierStd/styles.css'
import '../../static/FuturaStd-HeavyOblique/styles.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Aperçu.ai</title>
      <meta name="description" content="Aperçu.ai is an amazing thing." />
    </Helmet>
    <Header />
    <div className="container" >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
