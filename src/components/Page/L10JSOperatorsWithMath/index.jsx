// _lesson
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Pre from './../../elements/Pre'
import Header from '../../elements/Header'
import { PrismCode } from 'react-prism'

const Lesson04 = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <Header
        title='JavaScript Operators with Math'
      />
      <section>
        <h2>Operators</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Addition</td>
              <td>+</td>
              <td>Use to add numbers</td>
              <td><PrismCode component='code' className='javascript'>let x = 2 + 4</PrismCode></td>
            </tr>
          </tbody>
        </Table>
        <PrismCode className="language-javascript">
          {`
  const id = x => x
`}
        </PrismCode>
      </section>

      <Pre
        code={[
          '<div id="about">',
          '',
          '</div>'
        ]}
        language='html'
      />


    </div>
  )
};

export default Lesson04;
