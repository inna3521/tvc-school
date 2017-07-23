// SiteTitle
import React from 'react'
import { Image, Grid, Row, Well } from 'react-bootstrap'
import classNames from 'classnames'
import './style.css'

const Img = (props) => {
  let cite
  cite = props.cite
    ? <cite>{`source: ${props.cite}`}</cite>
      : ''

  const styles = classNames(
    {
      'img-size-inline': props.size === 'inline',
      'img-inline': props.size === 'inline',
      'img-size-medium': props.size === 'medium',
      'img-size-large': props.size === 'large',
    }
  )
  const image = <Image
    responsive
    className={styles}
    src={props.src}
    alt={props.alt}
                />
  switch (props.size) {
    case 'inline':
      return image
    default:
      return (
        <Well className='img-well img-size-medium'>
          <Grid>
            <Row className='img-row'>
              {image}
              {cite}
            </Row>
          </Grid>
        </Well>
      )
  }
}
export default Img;
