// Img
import React from 'react'
import { Image, Grid, Row, Well } from 'react-bootstrap'
import classNames from 'classnames'
import styles from './style.css'

const Img = (props) => {
  let cite
  cite = props.cite
    ? <cite>{`source: ${props.cite}`}</cite>
      : ''

  const imageStyles = classNames(
    {
      [styles.imgSizeSmall]: props.size === 'small',
      [styles.imgSizeInline]: props.size === 'inline',
      [styles.imgInline]: props.size === 'inline',
      [styles.imgSizeMedium]: props.size === 'medium',
      [styles.imgSizeLarge]: props.size === 'large',
    }
  )
  const wellStyles = classNames({
    [styles.imgWell]: true,
    [styles.imgSizeMedium]: true,
  })
  const image = <Image
    responsive
    className={imageStyles}
    src={props.src}
    alt={props.alt}
                />
  switch (props.size) {
    case 'inline':
      return image
    default:
      return (
        <Well className={wellStyles}>
          <Grid>
            <Row className={styles.imgRow}>
              {image}
              {cite}
            </Row>
          </Grid>
        </Well>
      )
  }
}
export default Img;
