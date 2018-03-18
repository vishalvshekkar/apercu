import React from 'react'
import TypeIt from 'typeit';

import { typeStrings } from '../constants'

let typeit = null;


class Typewriter extends React.Component {
  
  componentDidMount() {
    if (window) {
      new TypeIt('#typeit', {
        speed: 30,
        deleteSpeed: 5,
        strings: [typeStrings[this.props.choice]]
      })
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(newProps) {
    if (window) {
      document.getElementById('typeit').innerHTML = typeStrings[this.props.choice];
      if (newProps.choice !== this.props.choice) {
        new TypeIt('#typeit', {
          speed: 30,
          deleteSpeed: 5,
          startDelete: true,
          nextStringDelay: 100,
          strings: [typeStrings[newProps.choice]]
        })
      }
    }
  } 

  render() {
    return (
      <div className="type-wrapper">
        <div id="typeit">typeStrings[this.props.choice]</div>
      </div>
    )
  }
}

export default Typewriter
