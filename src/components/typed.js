import React from 'react'
import Typed from 'typed.js';

import { typeStrings, speed } from '../constants'

class Typewriter extends React.Component {

  typeit = null;

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
      this.typeit = new Typed('#typeit', {
        typeSpeed: speed,
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
        this.heightFix(newProps);
        this.typeit = new Typed('#typeit', {
          typeSpeed: speed,
          strings: [typeStrings[newProps.choice]],
        })
      }
    }
  } 

  render() {
    return (
      <div className="type-wrapper">
        <h1 id="typeit" dangerouslySetInnerHTML={{ __html: typeStrings[this.props.choice] }} ></h1>
      </div>
    )
  }
}

export default Typewriter
