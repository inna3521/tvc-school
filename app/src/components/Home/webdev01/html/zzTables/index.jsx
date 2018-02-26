import React from 'react'
import Section from 'elements/Section'
import Table from 'elements/NewTable'
import TR from 'elements/TR'
import TD from 'elements/TD'
import styles from './style.css'
import Code from 'elements/Code'

const Tables = (props) => {
  return (

    <div>
      <Section
        title='Anotomy of a Table'
      >
        <div className={styles.legend}>
          <div className={styles.legendLabel}>Legend:</div>
          <div className={styles.key}>
            <div className={styles.colorBox1}></div>
            <div className={styles.colorLabel}><code>&lt;th&gt;</code></div>
          </div>
          <div className={styles.key}>
            <div className={styles.colorBox2}></div>
            <div className={styles.colorLabel}><code>&lt;td&gt;</code></div>
          </div>
        </div>
        <table className={styles.playTable}>
          <thead>
            <tr>
              <td className={styles.rowLabel}><code>&lt;tr&gt;</code> <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></td>
              <th>Region</th>
              <th>Q1</th>
              <th>Q2</th>
              <th>Q3</th>
              <th>Q4</th>
              <td className={styles.thLabel}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> <code> &lt;th&gt;</code></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.rowLabel}><code>&lt;tr&gt;</code> <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></td>
              <td>North</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td className={styles.bodyLabel} rowSpan="4"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> <code>&lt;body&gt;</code> </td>
            </tr>
            <tr>
              <td className={styles.rowLabel}><code>&lt;tr&gt;</code> <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></td>
              <td>East</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td className={styles.rowLabel}><code>&lt;tr&gt;</code> <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></td>
              <td>South</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td className={styles.rowLabel}><code>&lt;tr&gt;</code> <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></td>
              <td>West</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title='Table Elements'>
        <Table>
          <TR>
            <TD>
              <Code code={'<table>'} html />
            </TD>
            <TD>
              <b>table:</b> use as the outer most element of a table.
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<thead>'} html />
            </TD>
            <TD>
              <b>t-head:</b> is used to create a group of column labels for a table. This element is often called 'table head' but as you will see on the next row the &lt;th&gt; could also be called 'table head' so it is better to say 't-head'
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<th>'} html />
            </TD>
            <TD>
              <b>th:</b> is used to define a single cell that is the lable for a table column. This element could also be called 'table head' which would be the same as the &lt;thead&gt; element, so it is bes to say 'th'.
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<tbody>'} html />
            </TD>
            <TD>
              <b>table body:</b> is used to contain a group of table rows that are the body of the table. I.e., not the title, header, footer, etc.
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<tr>'} html />
            </TD>
            <TD>
              <b>table row:</b> is used to define a row in a table.
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<td>'} html />
            </TD>
            <TD>
              <b>table data:</b> is used to define a single cell in the table body.
            </TD>
          </TR>
        </Table>
      </Section>
    </div>
      )
      };

      export default Tables;
