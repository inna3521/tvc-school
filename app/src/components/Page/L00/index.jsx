// L01HTMLElements
import React from 'react'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection/index'
import UL from '../../elements/UL'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import Pre from '../../elements/Pre'
import iImageImage from './img/image-image.png'
import Table from '../../elements/NewTable'
import TH from '../../elements/TH'
import TR from '../../elements/TR'
import TD from '../../elements/TD'

const L00 = (props) => {
  return (
    <Lesson
      title='L00'
      subTitle='Testing Prism'
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <LessonSection>
        <table className='table table-striped'>
          <tbody>
            <tr>
              <th>Elements (aka tag)</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                <Pre
                  code={[
                    "<img>"
                  ]}
                  language='html'
                />
              </td>
              <td>
                <b>image:</b> is used to put an image on the page.
                <Img
                  src={iImageImage}
                  size='inline'
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </LessonSection>
      <LessonSection>
        <Table striped>
          <TR>
            <TH>Elements (aka tag)</TH>
            <TH>Description</TH>
          </TR>
          <TR>
            <TD>
              <Pre code={["<img>"]} language='html'/>
            </TD>
            <TD>
              <b>image:</b> is used to put an image on the page.
              <Img src={iImageImage} size='inline' alt="placeholder of image" />
            </TD>
          </TR>
          <TR>
            <TD>
              <pre className='language-html'><code>&lt;ul&gt; &amp; &lt;li&gt;</code></pre>
            </TD>
          </TR>

        </Table>
      </LessonSection>

    </Lesson>
  )
};

export default L00;
