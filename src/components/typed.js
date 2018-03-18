import React from 'react'
import Typed from 'typed.js';

import { typeStrings } from '../constants'

class Typewriter extends React.Component {

  typeit = null;
  
  componentDidMount() {
    if (window) {
      document.getElementById('typeit').innerHTML = '';
      this.typeit = new Typed('#typeit', {
        typeSpeed: 30,
        strings: [typeStrings[this.props.choice]],
      })
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(newProps) {
    if (window) {
      if (newProps.choice !== this.props.choice) {
        this.typeit.destroy();
        document.getElementById('typeit').innerHTML = '';
        this.typeit = new Typed('#typeit', {
          typeSpeed: 30,
          strings: [typeStrings[newProps.choice]],
        })
      }
    }
  } 

  render() {
    return (
      <div className="type-wrapper">
        <div id="typeit" dangerouslySetInnerHTML={{ __html: typeStrings[this.props.choice] }} ></div>
      </div>
    )
  }
}

export default Typewriter
