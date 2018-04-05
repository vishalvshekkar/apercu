import React from 'react'

import { typeStrings, speed } from '../constants'

class Typewriter extends React.Component {

  typeit = null

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
      this.typeit = new TypeIt('#typeit', {
        strings: [typeStrings[this.props.choice]],
        speed: speed,
        deleteSpeed: 5,
        lifeLike: false,
        cursor: false,
        afterComplete: function (instance) {
          document.querySelector('.type-wrapper').style.minHeight = 0;
          document.querySelector('#typeit span').classList += ' cursor';
        },
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
        document.querySelector('#typeit span').innerHTML = typeStrings[newProps.choice];
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
