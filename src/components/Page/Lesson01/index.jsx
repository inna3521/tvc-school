// Lesson01
import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'
import Code from './../../elements/Code'
// import parse from 'parse5'
// import { data } from './data'
import { lesson } from './data';
import { space } from '../../../lib/utils'


const Lesson01 = (props) => {
  console.log('html', lesson.html);
  // console.log("space", 'x' + makeSpace(5) + 'x')
  // const documentFragment = parse.parseFragment(lesson.html);

  // console.log('child0', documentFragment.childNodes[0].childNodes[0])
  // console.log('child0', documentFragment.childNodes[0].childNodes[1])
  // console.log('childNodes.length', documentFragment.childNodes[0])
  const createMarkup = () => {
    return {__html: lesson.html};
  }
  const getCode = () => {
    return (
      <code></code>
    )
  }
  return (
    <div>
      <Button
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <div>

        <Code
          code={[
            'const id = x => 10',
            'function myFun() {',
            '  let x = 10',
            '}'
          ]}
        />









      </div>
      <hr/>
      <h2>Lesson01</h2>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
};

export default Lesson01;
