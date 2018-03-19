import React from 'react'
import cx from 'classnames'

import { tabLinks, tabContent, alphabetArray } from '../constants'

const Tabs = (props) => (
  <main className="tabs">
    <ul className="tab-links">
      {
        tabLinks.map(tabLink => (
          <li key={tabLink.id} className={cx('tab-link', { active: props.choice === tabLink.id })}>
            <a href={`#${tabLink.id}`} onClick={e => {
              e.preventDefault();
              if (props.onChange) props.onChange(tabLink.id);
            }} ><span>{tabLink.label}</span></a>
          </li>
        ))
      }
    </ul>
    {
      tabContent.hasOwnProperty([props.choice]) ?
      <div className="tab-content">
        <ul className="content">
          {
            tabContent[props.choice].map((content, idx) => <li className="content-item" key={content + props.choice}>({alphabetArray[idx]}) {content}</li> )
          }
        </ul>
      </div>
      : null
    }
  </main>
)

export default Tabs
