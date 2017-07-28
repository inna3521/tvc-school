// L10JSOperatorsWithMath
import React from 'react'
import './style.css'
import { Button, Table } from 'react-bootstrap'
import Pre from './../../elements/Pre'
import Code from './../../elements/Code'
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
      <h2>Operators</h2>
      <section>
        <h3>Arithmetic operators</h3>
        <Table responsive className='tbl-operators'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Description</th>
              <th>Example</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Addition</td>
              <td className='operator-symbol'>+</td>
              <td>Use to add numbers</td>
              <td><Code language='js' code='let x = 2 + 4'></Code></td>
              <td className='operator-answer'>6</td>
            </tr>
            <tr>
              <td>Subtraction</td>
              <td className='operator-symbol'>-</td>
              <td>Use to subtract numbers</td>
              <td><Code language='js' code='let x = 5 - 2'></Code></td>
              <td className='operator-answer'>3</td>
            </tr>
            <tr>
              <td>Division</td>
              <td className='operator-symbol'>/</td>
              <td>Use to divide numbers</td>
              <td><Code language='js' code='let x = 6 / 3'></Code></td>
              <td className='operator-answer'>2</td>
            </tr>
            <tr>
              <td>Multiplication</td>
              <td className='operator-symbol'>*</td>
              <td>Use to multiply numbers</td>
              <td><Code language='js' code='let x = 7 * 5'></Code></td>
              <td className='operator-answer'>35</td>
            </tr>
            <tr>
              <td>Remainder</td>
              <td className='operator-symbol'>%</td>
              <td>Use to find the remainder of division</td>
              <td><Code language='js' code='let x = 9 % 4'></Code></td>
              <td className='operator-answer'>2</td>
            </tr>
            <tr>
              <td>Exponentiation</td>
              <td className='operator-symbol'>**</td>
              <td>Raises the first number to the power of the second number.</td>
              <td><Code language='js' code='let x = 4 ** 2'></Code></td>
              <td className='operator-answer'>8</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section>
        <h2>Examples</h2>
        <h3>Addition</h3>
        <Pre
          code={[
              'let x = 2',
              'let y = 3',
              'let a = x + y',
              '// answer = 5'
          ]}
          language='js'
        />
        <h3>Remainder</h3>
        <p>The remainder operator returns the remainder of division.</p>
        <Pre
          code={[
            'let x = 7',
            'let y = 4',
            'let a = x % y',
            '// answer = 5'
          ]}
          language='js'
        />
      </section>
      <section>
        <h3>Assignment operators</h3>
        <p>JavaScript has 12 assignment operators such as 'multiplication assignment' and 'division assignment'. We are going to focuse on just one of them which is simple called the 'assignment operator'.</p>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Description</th>
              <th>Example</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assignment</td>
              <td className='operator-symbol'>=</td>
              <td>Use to assign a value to a variable<br/>Returns true or false</td>
              <td><Code language='js' code='let x = 4'></Code></td>
              <td className='operator-answer'></td>
            </tr>

          </tbody>
        </Table>
      </section>
      <section>
        <h3>Relational operators</h3>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Description</th>
              <th>Example</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Less than</td>
              <td className='operator-symbol'>&lt;</td>
              <td>Use to compare two numbers<br/>Returns true or false</td>
              <td><Code language='js' code='let x = 4 &lt; 2'></Code></td>
              <td className='operator-answer'>false</td>
            </tr>
            <tr>
              <td>Greater than</td>
              <td className='operator-symbol'>&gt;</td>
              <td>Use to compare two numbers<br/>Returns true or false</td>
              <td><Code language='js' code='let x = 4 &gt; 2'></Code></td>
              <td className='operator-answer'>true</td>
            </tr>
            <tr>
              <td>Less than or equal</td>
              <td className='operator-symbol'>&lt;&#61;</td>
              <td>Use to compare two numbers<br/>Returns true or false</td>
              <td><Code language='js' code='let x = 4 &lt;&#61;  4'></Code></td>
              <td className='operator-answer'>true</td>
            </tr>
            <tr>
              <td>Greater than or equal</td>
              <td className='operator-symbol'>&gt;&#61;</td>
              <td>Use to compare two numbers<br/>Returns true or false</td>
              <td><Code language='js' code='let x = 3 &gt;&#61;  4'></Code></td>
              <td className='operator-answer'>false</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section>
        <h3>Equality operators</h3>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Use</th>
              <th>Example</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="gray-tr">
              <td>Equality operator - DON'T USE IT</td>
              <td className='operator-symbol'>==</td>
              <td>Assign value to variable</td>
              <td><Code language='gray' code='let x = 4'></Code></td>
              <td className='operator-answer'></td>
            </tr>
            <tr className="gray-tr">
              <td>Inequality operator - DON'T USE IT</td>
              <td className='operator-symbol'>&lt;</td>
              <td>Compare 2 values. Returns <i>true</i> if they are not equal</td>
              <td><Code language='gray' code='x !=y'></Code></td>
              <td className='operator-answer'></td>
            </tr>
          </tbody>
        </Table>
      </section>

    </div>
  )
};

export default Lesson04;
