import React from 'react'
import Link from 'gatsby-link'

import Typewriter from '../components/typed';
import Tabs from '../components/tabs';

import { typeStrings } from '../constants'

class IndexPage extends React.Component {

  state = {
    choice: this.props.location.hash.replace(/#/g, '') || Object.keys(typeStrings)[0]
  }

  onChange = (choice) => {
    location.hash = `#${choice}`;
    this.setState({ choice })
  }

  render() {
    return (
      <div>
        <Typewriter choice={this.state.choice} />
        <Tabs choice={this.state.choice} onChange={this.onChange} />
      </div>
    )
  }
}

export default IndexPage
