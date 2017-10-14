// Callout
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

const Callout = (props) => {
  const callOutStyle = classNames(
    {
      [styles.callout]: true,
      [styles.calloutDanger]: props.type === 'danger',
      [styles.calloutWarning]: props.type === 'warning',
      [styles.calloutGoal]: props.type === 'goal',
      [styles.calloutInfo]: props.type === 'info',
    }
  )
  const titleStyle = classNames({
    [styles.titleDanger]: props.type === 'danger',
    [styles.titleWarning]: props.type === 'warning',
    [styles.titleGoal]: props.type === 'goal',
    [styles.titleInfo]: props.type === 'info',
  })

  return (
    <div className={callOutStyle}>
      <h4 className={titleStyle}>{props.title}</h4>
      {props.children}
    </div>
  )

}

export default Callout;


// import React from 'react'
// import classNames from 'classnames'
// import P from '../../elements/P'
// import styles from './style.css'
//
// const Callout = (props) => {
//   const callOutStyle = classNames(
//     {
//       [styles.callout]: true,
//       [styles.calloutDanger]: props.type === 'danger',
//       [styles.calloutWarning]: props.type === 'warning',
//       [styles.calloutGoal]: props.type === 'goal',
//       [styles.calloutInfo]: props.type === 'info',
//       [styles.calloutMedium]: true,
//     }
//   )
//
//
//   let renderText
//   if (Array.isArray(props.text)) {
//     renderText = props.text.map((t, index) => {
//       return (
//         <P
//           key={index}
//           text={t}
//         />
//       )
//     })
//   } else {
//       renderText = <P
//         text={props.text}
//                    />
//   }
//   return (
//     <div className={callOutStyle}>
//       <h4>{props.title}</h4>
//       {renderText}
//     </div>
//   )
// }
//
// export default Callout;
