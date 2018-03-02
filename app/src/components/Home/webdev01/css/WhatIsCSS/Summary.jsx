import React from 'react'
import styles from './style.css'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Table from 'elements/NewTable'
import TH from 'elements/TH'
import TR from 'elements/TR'
import TD from 'elements/TD'

const Summary = () => {
  return (

    <Section title='Summary' l1>
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
                '<P>some text here</P>',
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
                '<p class="aside-style">paragraph 1</P>',
                '<P>paragraph 2</P>',
                '<p class="aside-style">paragraph 3</P>',
              ]}
              language='html'
            />
          </TD>
        </TR>
      </Table>
    </Section>
    )
  };
export default Summary
