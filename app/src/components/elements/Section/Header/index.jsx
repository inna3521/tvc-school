import React from 'react'
import styles from './style.css'
import classNames from 'classnames'

/*
    > l0 means a section with not title used for organization/symmetry only
    > The default is l1
 */

const Header = ({ title, subTitle, l0, l1, l2, l3, l4, children}) => {


  const titleStyles = classNames({
    [styles.titleOne]: l1 || (!l0 && !l2 && !l3 && !l4),
    [styles.titleTwo]: l2,
    [styles.titleThree]: l3,
    [styles.titleFour]: l4,
    [styles.titleFont]: true,
  })
  const subTitleStyles = classNames({
    [styles.subTitleOne]: l1 || (!l0 && !l2 && !l3 && !l4),
    [styles.subTitleTwo]: l2,
    [styles.subTitleThree]: l3,
    [styles.titleFont]: true,
  })
  return (
    <div className={styles.header}>
      <div className={titleStyles}>{title}</div>
      <div className={subTitleStyles}>{subTitle}</div>
      {children}
    </div>
  )
}

export default Header
