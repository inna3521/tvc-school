// Section
import React from 'react'
// import styles from './style.css'
import Header from './Header'



const Section = (props) => {
  return (
    <div>
      <Header
        title={props.title}
        subTitle={props.subTitle}
        level={props.level}
      />
      {props.children}
    </div>
  )
}

export default Section
