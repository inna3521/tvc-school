// Img
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

const Img = (props) => {

  let cite
  cite = props.cite
    ? <cite>{`source: ${props.cite}`}</cite>
      : false

  const imageStyles = classNames(
    {
      [styles.imgSizeSmall]: props.small,
      [styles.imgSizeInline]: props.inline,
      [styles.imgSizeMedium]: props.medium,
      [styles.imgSizeLarge]: props.large,
      'img-responsive': true,
    }
  )

  const image = <img
    className={imageStyles}
    src={props.src}
    alt={props.alt}
                />
  if (cite) {
    return (
      <div>
        {image}
        {cite}
      </div>
    )
  } else {
    return image
  }

}
export default Img;
