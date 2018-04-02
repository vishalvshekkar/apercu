import React from 'react'

import { typeStrings, speed } from '../constants'

const defaultConfig = {
  speed: speed,
  deleteSpeed: 5,
  lifeLike: false,
  cursor: false,
  afterComplete: function (instance) {
    document.querySelector('#typeit span').classList += ' cursor';
  }
}

class Typewriter extends React.Component {

  heightFix = (props) => {
    const el = document.getElementById('typeit');
    const wrapper = document.querySelector('.type-wrapper');
    wrapper.style.minHeight = `0px`;
    el.style.opacity = 0;
    el.innerHTML = typeStrings[props.choice] + ' |';
    const height = wrapper.clientHeight;
    wrapper.style.minHeight = `${height}px`;
    el.innerHTML = '';
    el.style.opacity = 1;
  }
  
  componentDidMount() {
    if (window) {
      this.heightFix(this.props);
      const TypeIt = require('typeit');
      new TypeIt('#typeit', Object.assign({}, defaultConfig ,{
        strings: [typeStrings[this.props.choice]],
      }))
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(newProps) {
    if (window) {
      this.heightFix(newProps);
      const TypeIt = require('typeit');
      document.getElementById('typeit').innerHTML = typeStrings[this.props.choice];
      if (newProps.choice !== this.props.choice) {
        new TypeIt('#typeit', Object.assign({}, defaultConfig ,{
          startDelete: true,
          nextStringDelay: 100,
          strings: [typeStrings[newProps.choice]],
        }))
      }
    }
  } 

  render() {
    return (
      <div className="type-wrapper">
        <div id="typeit" dangerouslySetInnerHTML={{ __html: typeStrings[this.props.choice] }} />
      </div>
    )
  }
}

export default Typewriter
