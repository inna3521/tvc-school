// Img
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

/*
    > cite
    > margin - array[5, 10] or array[5, 10, 5, 10]
    > maxWidth
    > size - small, medium, large
    > src
    > alt
    > inline - t/f
*/
const Img = (props) => {
  let cite = props.cite
    ? <cite>{`source: ${props.cite}`}</cite>
      : false
  let mTop = 0
  let mRight = 0
  let mBottom = 0
  let mLeft = 0
  if (props.margin) {
    const margin = props.margin
    const len = margin.length

    if (len > 0) {
      if (len === 2) {
        mTop = margin[0]
        mRight = margin[1]
        mBottom = margin[0]
        mLeft = margin[1]
      } else if (len === 4) {
        mTop = margin[0]
        mRight = margin[1]
        mBottom = margin[2]
        mLeft = margin[3]
      }
    }
  }
  let passedStyles = {}
  passedStyles.maxWidth = props.maxWidth
  if (props.margin) {
    passedStyles.marginTop = mTop
    passedStyles.marginRight = mRight
    passedStyles.marginBottom = mBottom
    passedStyles.marginLeft = mLeft
  }

  // const imgMaxWidth = 10
  const localStyles = classNames(
    {
      [styles.imgSizeSmall]: props.small,
      [styles.imgSizeMedium]: props.medium,
      [styles.imgSizeLarge]: props.large,
      [styles.imageProperties]: true,
    }
  )

  const image = <img
    className={styles.responsive}
    src={props.src}
    alt={props.alt}
                />
  if (props.inline) {
    return image
  } else {
    // It could have a cite or not
    return (
      <div className={localStyles} style={passedStyles}>
        {image}
        {cite}
      </div>
    )
  }

}
export default Img;
