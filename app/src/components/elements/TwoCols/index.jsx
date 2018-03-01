import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const colStyle = {
  // textAlign: 'center',
}

export const TwoSides = ({ children, title }) => {
  return (
    <div>
      {title ? <h3>{title}</h3> : null}
      <Grid>
        <Row>
          <Col md={6} style={colStyle}>
            {children[0]}
          </Col>
          <Col md={6}>
            {children[1]}
          </Col>
        </Row>
      </Grid>
    </div>
  )

}
export default TwoSides
