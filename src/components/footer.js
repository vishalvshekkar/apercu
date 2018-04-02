import React from 'react'
import Link from 'gatsby-link'

import facebook from '../../static/icons/facebook.svg';
import instagram from '../../static/icons/instagram.svg';
import twitter from '../../static/icons/twitter.svg';

import { twitterLink, facebookLink, instaLink, contactLink } from '../constants'

const Footer = () => (
  <footer>
    <h4 className="footer-title" >You can reach out to us <Link to={contactLink} >here</Link>!</h4>
    <ul className="social-icons">
      <li className="social-icon"><a target="_blank" href={facebookLink}><img src={facebook} alt="modvision facebook" /></a></li>
      <li className="social-icon"><a target="_blank" href={twitterLink}><img src={twitter} alt="modvision twitter"/></a></li>
      <li className="social-icon"><a target="_blank" href={instaLink}><img src={instagram} alt="modvision instagram" /></a></li>
    </ul>
    <p className="footer-copy"><span className="bigger">©</span><span>Usme, Inc 2018</span></p>
  </footer>
)

export default Footer
