// Lesson04
import React from 'react'
import styles from './style.css'
import Img from './../../elements/Img'
import Pre from './../../elements/Pre'
import iCSSSyntax02 from './img/css-syntax.02.png'
import iCSSSyntax03 from './img/css-syntax.03.png'
import iKeyValuePair02 from './img/key-value-pair.02.png'
import iKeyValuePair from './img/key-value-pair.png'
import Lesson from '../../elements/Lesson'
import Table from '../../elements/NewTable'
import UL from '../../elements/UL'
import TH from '../../elements/TH'
import TR from '../../elements/TR'
import TD from '../../elements/TD'

const Lesson04 = (props) => {
  return (
    <Lesson
      title='CSS'
      subTitle='What is CSS?'
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <p>CSS stands for <span className="large-cap">C</span>ascading<span className="large-cap"> S</span>tyle <span className="large-cap">S</span>heets.
        We will get to the meaning of the name in a later lession.
      </p>
      <p>
        While HTM defines the structure and content of your webpage, CSS determines the appearance and layout.
        <UL
          listItems={[
            "Appearance is called 'style' and includes things such as font color, bold or non-bold and backgroud image or color",
            'Layout means where things appear on the page and their alignment.',
            'With CSS you can center a heading or put an image on the right side of the page or put two images side-by-side.'
          ]}
        />
      </p>
      <h2>Key / Value Pairs</h2>
      <p>To effectively work with CSS you need to know what key / value pairs are.
        Key / value pairs are everwhere in programming, not just in CSS. Here are
      couple of examples:</p>
      <UL
        listItems={[
          'name : joe',
          'size : large'
        ]}

      />
      <Img
        src={iKeyValuePair}
      />
      <p>Above you see that the key is on the left side of the colon (':') and
        the value is on the right. There are other ways to represent key / value
      pairs. For example:</p>
      <Img
        src={iKeyValuePair02}
      />
      <p>You often see key / value pairs in code:</p>
      <Pre
        code={[
            "var name = 'joe'",
        ]}
        language='js'
      />
      <h2>CSS Syntax</h2>
      <p>CSS has the following syntax:</p>
      <Img
        src={iCSSSyntax02}
      />
      <p>In CSS the 'key' is called a property</p>
      <Img
        src={iCSSSyntax03}
      />
      <h2>Types of CSS</h2>
      <p>Up to now we have use the term 'style' and that is a commonly used term.
        However, to really understand CSS we need some additional vocabulary. We
      will learn the following terms:</p>
      <UL
        listItems={[
          'selector',
          'element selector',
          'id selector',
          'class selector'
        ]}
      />
      <h3>Selector</h3>
      <p>Below is a typical CSS selector. It is called a 'selector' because it will select parts of the web page. In this case, it will select all &lt;p&gt; (paragraph) elements. Read on to learn what that means.</p>
      <Pre
        code={[
          'p {',
          '  font-size: 12px;',
          '}'
        ]}
        language='css'
      />
      <h3>Element Selector</h3>

      <p>An <em>element selector</em> selects all html elements of a given type. Below is a &lt;p&gt; (paragraph) selector.</p>
      <Pre
        code={[
          'p {',
          '  font-size: 12px;',
          '  color: green;',
          '}'
        ]}
        language='css'
      />
      <p>This selector will ...</p>
      <UL
        listItems={[
          '<em>Select</em> all &lt;p&gt; elements (paragraphs)',
          'Make the font size of all &lt;p&gt; elements 12px',
          'It will make a fonts in all &lt;p&gt; elements green'
        ]}
      />
      <h3>ID Selector</h3>
      <p>Remember from the HTML lessons that an HTML element can have an attribute.
        A &lt;div&gt; with a <em>id</em> attribute looks like this:</p>
      <Pre
        code={[
          '<div id="about">',
          '',
          '</div>'
        ]}
        language='html'
      />
      <p>An <em>ID selector</em> will select whatever element has the specified ID. An ID selectory start with a pound sign (#). Here is a ID selector that will set the font-size to 24px for the element with the 'id' of 'about'. </p>
      <Pre
        code={[
            '#about {',
            '  font-size: 24px;',
            '}'
        ]}
        language='css'
      />
      <h3>Class Selector</h3>
      <p>HTML elements can also have a <em>class</em> attribute. Here are two
      &lt;p&gt; elements with a class attribute and one without.</p>
      <Pre
        code={[
          '<p class="aside-style">paragraph 1</p>',
          '<p>paragraph 2</p>',
          '<p class="aside-style">paragraph 3</p>',
        ]}
        language='html'
      />
      <p>A CSS class selector starts with a period (.).</p>
      <Pre
        code={[
          '.aside-style {',
          '  font-size: 14px',
          '}',
        ]}
        language='css'
      />
      <h2>Summary</h2>
      <Table striped>
        <TR>
          <TH>Selector Type</TH>
          <TH>Starts<br/>With</TH>
          <TH>This selector</TH>
          <TH>Will select this</TH>
        </TR>
        <TR className='background-highlight-white'>
          <TD>Element Selector</TD>
          <TD className={styles.colStartsWith}>nothing</TD>
          <TD>
            <Pre
              code={[
                  'p {',
                  '  font-size: 12px;',
                  '}'
              ]}
              language='css'
            />
          </TD>
          <TD>
            <Pre
              code={[
                  '<p>some text here</p>',
              ]}
              language='html'
            />
          </TD>
        </TR>
        <TR>
          <TD>ID Selector</TD>
          <TD className={styles.colStartsWith}>#</TD>
          <TD>
            <Pre
              code={[
                  '#about {',
                  '  font-size: 24px;',
                  '}'
              ]}
              language='css'
            />
          </TD>
          <TD>
            <Pre
              code={[
                  '<div id="about">',
                  '',
                  '</div>'
              ]}
              language='html'
            />
          </TD>
        </TR>
        <TR className='background-highlight-white'>
          <TD>Class Selector</TD>
          <TD className={styles.colStartsWith}>.</TD>
          <TD>
            <Pre
              code={[
                  '.aside-style {',
                  '  font-size: 14px',
                  '}',
              ]}
              language='css'
            />
          </TD>
          <TD>
            <Pre
              code={[
                  '<p class="aside-style">paragraph 1</p>',
                  '<p>paragraph 2</p>',
                  '<p class="aside-style">paragraph 3</p>',
              ]}
              language='html'
            />
          </TD>
        </TR>
      </Table>

    </Lesson>
      )
      };

      export default Lesson04;
