import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const colStyle = {
  textAlign: 'center',
}

class ThreeCols extends Component {

  render() {
    const iframe = this.refs.iframe
    const document = iframe.contentDocument
    document.body.innerHTML = "<p>Hello iFrame</p>"
    return (
      <div>
        {/* {title ? <h3>{title}</h3> : null} */}
        <Grid>
          <Row>
            <Col md={4} style={colStyle}>
              <p>hello</p>
            </Col>
            <Col md={4}>
              <p>hello</p>
            </Col>
            <Col md={4}>
              <iframe ref="iframe" />

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }



}
export default ThreeCols
