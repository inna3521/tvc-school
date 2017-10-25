// _lesson
import React from 'react'
import Pre from '../../elements/Pre'
import Lesson from '../../elements/Lesson'

const Lesson08 = (props) => {
  return (
    <Lesson
      title='Arrays'
    >
      <p>An array is an ordered set of values that you refer to with a name and an index. That probably has little meaning to someone who doesn't already know what an array is. The best way to understand arrays is to see them in action. However, before we jump in you'll need to understand zero based v. one based counting.</p>
      <p>When using one based counting you start counting with the number 1. So 5 numbers would be 1, 2, 3, 4, 5.</p>
      <p>With zero based counting you start counting with the number 0. So 5 numbers would be 0, 1, 2, 3, 4. Saying there are 5 numbers where the highest number is 4 can be confusing, but that is the way it works.</p>
      <p>Here is an example of an array named 'x' that has four values. Arrays are zero based so the first value in the array, 'cat', is 0 and 'bird' is 3.</p>
      <Pre
        code={[
          "/*         0      1       2        3 */",
          "let x = ['cat', 'dog', 'horse', 'bird']"
        ]}
        language='js'
      />
      <p>To access one of the values in an array you use the name of the array followed by square brackets containg the 'index' of the value you want. It looks like this:</p>
      <Pre
        code={[
          "name[2] // 2 is the 3rd element which is horse"
        ]}
        language='js'
      />
      <p>Next we will learn about Mozilla's Thimble code editor which we will use for arrays.</p>
    </Lesson>
  )
};

export default Lesson08;
