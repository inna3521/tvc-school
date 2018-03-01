// L10JSOperatorsWithMath
import React from 'react'
import './style.css'
import {Table} from 'react-bootstrap'
import Pre from 'elements/Pre'
import Code from 'elements/Code'
import Section from 'elements/Section'
import styles from './style.css'

const JSOperators = () => {
  const warnStyle = {
    color: 'red',
    fontWeight: 'bold'
  }
  return (<div id='JSOperators'>
    <h1 style={warnStyle}>This lesson shows several cases of where the current styling is not adequate. Needs review and modification.</h1>
    <Section title='Arithmetic Operators' l1>
      <Table responsive="responsive">
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
            <td className={styles.operatorSymbol}>+</td>
            <td>Use to add numbers</td>
            <td>
              <Code language='js' code='let x = 2 + 4'></Code>
            </td>
            <td className={styles.operatorAnswer}>6</td>
          </tr>
          <tr>
            <td>Subtraction</td>
            <td className={styles.operatorSymbol}>-</td>
            <td>Use to subtract numbers</td>
            <td>
              <Code language='js' code='let x = 5 - 2'></Code>
            </td>
            <td className={styles.operatorAnswer}>3</td>
          </tr>
          <tr>
            <td>Division</td>
            <td className={styles.operatorSymbol}>/</td>
            <td>Use to divide numbers</td>
            <td>
              <Code language='js' code='let x = 6 / 3'></Code>
            </td>
            <td className={styles.operatorAnswer}>2</td>
          </tr>
          <tr>
            <td>Multiplication</td>
            <td className={styles.operatorSymbol}>*</td>
            <td>Use to multiply numbers</td>
            <td>
              <Code language='js' code='let x = 7 * 5'></Code>
            </td>
            <td className={styles.operatorAnswer}>35</td>
          </tr>
          <tr>
            <td>Remainder</td>
            <td className={styles.operatorSymbol}>%</td>
            <td>Use to find the remainder of division</td>
            <td>
              <Code language='js' code='let x = 9 % 4'></Code>
            </td>
            <td className={styles.operatorAnswer}>2</td>
          </tr>
          <tr>
            <td>Exponentiation</td>
            <td className={styles.operatorSymbol}>**</td>
            <td>Raises the first number to the power of the second number.</td>
            <td>
              <Code language='js' code='let x = 4 ** 2'></Code>
            </td>
            <td className={styles.operatorAnswer}>8</td>
          </tr>
        </tbody>
      </Table>
    </Section>
    <Section title='Examples' l2>
      <Section title='Addition' l4>
        <Pre
          code={[
              'let x = 2',
              'let y = 3',
              'let a = x + y',
              '// answer = 5'
          ]}
          language='js'
        />
      </Section>
      <Section title='Remainder' l4>
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
      </Section>
    </Section>
    <Section title='Assignment Operators' l1>
      <p>JavaScript has 12 assignment operators such as 'multiplication assignment' and 'division assignment'. We are going to focus on just one of them which is simply called the 'assignment operator'.</p>
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
            <td className={styles.operatorSymbol}>=</td>
            <td>Use to assign a value to a variable<br/>Returns true or false</td>
            <td><Code language='js' code='let x = 4'></Code></td>
            <td className={styles.operatorAnswer}></td>
          </tr>

        </tbody>
      </Table>
    </Section>
    <Section title='Relational Operators' l2>
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
            <td className={styles.operatorSymbol}>&lt;</td>
            <td>Use to compare two numbers<br/>Returns true or false</td>
            <td><Code language='js' code='let x = 4 &lt; 2'></Code></td>
            <td className={styles.operatorAnswer}>false</td>
          </tr>
          <tr>
            <td>Greater than</td>
            <td className={styles.operatorSymbol}>&gt;</td>
            <td>Use to compare two numbers<br/>Returns true or false</td>
            <td><Code language='js' code='let x = 4 &gt; 2'></Code></td>
            <td className={styles.operatorAnswer}>true</td>
          </tr>
          <tr>
            <td>Less than or equal</td>
            <td className={styles.operatorSymbol}>&lt;&#61;</td>
            <td>Use to compare two numbers<br/>Returns true or false</td>
            <td><Code language='js' code='let x = 4 &lt;&#61;  4'></Code></td>
            <td className={styles.operatorAnswer}>true</td>
          </tr>
          <tr>
            <td>Greater than or equal</td>
            <td className={styles.operatorSymbol}>&gt;&#61;</td>
            <td>Use to compare two numbers<br/>Returns true or false</td>
            <td><Code language='js' code='let x = 3 &gt;&#61;  4'></Code></td>
            <td className={styles.operatorAnswer}>false</td>
          </tr>
        </tbody>
      </Table>
    </Section>
    <Section title='Equality Operators' l2>
      <p>JaveScript equality operators have changed over time and some confusion has been introduced. The <Code language='js' code='==' /> and <Code language='js' code='!=' /> operators perform type conversion when comparing values. This often isn't what you want. To solve this, JavaScript introduced <Code language='js' code='===' /> and <Code language='js' code='!==' /> which do not do type conversion. Since you have not learned about type conversion yet we will postpone using the <Code language='js' code='==' /> and <Code language='js' code='!=' /> operators for another lesson.</p>
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
            <tr>
              <td>Identity operator</td>
              <td className={styles.operatorSymbol}>===</td>
              <td>Compare 2 values. Returns <i>true</i> if they are equal</td>
              <td><Code language='gray' code="'cat' === 'cat'"></Code></td>
              <td className={styles.operatorAnswer}>true</td>
            </tr>
            <tr>
              <td>Nonidentity operator</td>
              <td className={styles.operatorSymbol}>!==</td>
              <td>Compare 2 operands. Returns <i>true</i> if they are <b>not</b> equal</td>
              <td><Code language='gray' code="'Jane' != 'Jim'"></Code></td>
              <td className={styles.operatorAnswer}>false</td>
            </tr>
            <tr className="gray-tr">
              <td>Equality operator - DON'T USE IT</td>
              <td className={styles.operatorSymbol}>==</td>
              <td>Compare two operands. Returns <i>true</i> if they are equal</td>
              <td></td>
              <td className={styles.operatorAnswer}></td>
            </tr>
            <tr className="gray-tr">
              <td>Inequality operator - DON'T USE IT</td>
              <td className={styles.operatorSymbol}>&lt;</td>
              <td>Compare 2 operands. Returns <i>true</i> if they are not equal</td>
              <td></td>
              <td className={styles.operatorAnswer}></td>
            </tr>
          </tbody>
        </Table>
      </Section>

      </div>)
};

export default JSOperators;
