import React from 'react'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Callout from 'elements/Callout'
import LessonStatus from 'elements/LessonStatus'
import VideoStep from 'elements/VideoStep'
import Step from 'elements/Step'
import iDatabaseSlide from './media/database-slide.png'
import classNames from 'classnames'
import Table from 'elements/NewTable'
import UL from 'elements/UL'
import TH from 'elements/TH'
import TR from 'elements/TR'
import TD from 'elements/TD'
import A from 'elements/A'
import OL from 'elements/OL'
import LI from 'elements/LI'
// import newFile from './media/new-file-2.mp4'

const Introduction = () => {
  const imageStyle = {
    maxWidth: 1000
  }
  const dtStyle = {
    fontSize: 20,
  }
  const ddStyle = {
    fontSize: 20,
  }
  return (
    <div id='Introduction'>
      <LessonStatus outline>


      </LessonStatus>

      <Section title='What is a Database' level={1}>
        <Section title='Formal Definitions' level={2}>
          <dl>
            <dt style={dtStyle}>Database</dt>
            <dd style={ddStyle}>A structured set of data held in a computer, especially one that is accessible in various ways.</dd>
            <dd style={ddStyle}>A database is an organized collection of data.[1] A relational database, more restrictively, is a collection of schemas, tables, queries, reports, views, and other elements. Database designers typically organize the data to model aspects of reality in a way that supports processes requiring information, such as (for example) modelling the availability of rooms in hotels in a way that supports finding a hotel with vacancies.</dd>
          </dl>
          <dl>
            <dt style={dtStyle}>Database-management System (DBMS)</dt>
            <dd style={ddStyle}>A database-management system (DBMS) is a computer-software application that interacts with end-users, other applications, and the database itself to capture and analyze data. A general-purpose DBMS allows the definition, creation, querying, update, and administration of databases.</dd>
          </dl>
        </Section>
        <Section title='Informal Definition' level={2}>
          <p>A place to keep your data so you can use it later. The data in the database can be retrieved, changed, added to and deleted.</p>
        </Section>
      </Section>
      <Section title='DBMS Diagram' level={1}>
        <img src={iDatabaseSlide} alt='database diagram' style={imageStyle} />
      </Section>
      <Section title='SQL - Structured Query Language' level={1}>
        <Section title='Formal Definition' level={2}>
          <p>SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS).</p>
        </Section>
        <Section title='Informal Definition' level={2}>
          <p>You use it to work with data in the database.</p>
        </Section>
        <Section title='SQL Syntax' level={2}>
          <Table>
              <TR>
                <TH>Clause</TH>
                <TH>Description</TH>
              </TR>
              <TR>
                <TD>SELECT what_to_select</TD>
                <TD>A comma separated list of table columns</TD>
              </TR>
              <TR>
                <TD>FROM which_table</TD>
                <TD>A comma separated list of tables</TD>
              </TR>
              <TR>
                <TD>WHERE conditions_to_satisfy {'    '}</TD>
                <TD>A list of criteria like '= manager', '> 10', etc.</TD>
              </TR>
          </Table>
        </Section>
      </Section>
      <Section title='CRUD' level={1}>
        <p><b>C</b> = Create</p>
        <p><b>R</b> = Read</p>
        <p><b>U</b> = Update</p>
        <p><b>D</b> = Delete</p>
        <OL>
          <LI>CREATE DATABASE menagerie</LI>
          <LI>USE menagerie</LI>
          <LI>SHOW TABLES</LI>
          <LI>
            CREATE TABLE pet (<br/>
            name VARCHAR(20),<br/>
            owner VARCHAR(20),<br/>
            species VARCHAR(20),<br/>
            sex CHAR(1),<br/>
            birth DATE,<br/>
            death DATE);<br/>
          </LI>
          <LI>SHOW TABLES</LI>
          <LI>DESCRIBE pet</LI>
          <LI>
            INSERT INTO pet VALUES ('Fluffy', 'Harold', 'cat', 'f', '1993-02-04', NULL);
            INSERT INTO pet VALUES ('Claws', 'Gwen', 'cat', 'm', '1994-03-17', NULL);
            INSERT INTO pet VALUES ('Buffy', 'Harold', 'dog', 'f', '1989-05-13', NULL);
            INSERT INTO pet VALUES ('Fang', 'Benny', 'dog', 'm', '1990-08-27', NULL);
            INSERT INTO pet VALUES ('Bowser', 'Diane', 'dog', 'm', '1979-08-31', '1995-07-29');
            INSERT INTO pet VALUES ('Chirpy', 'Gwen', 'bird', 'f', '1998-09-11', NULL);
            INSERT INTO pet VALUES ('Whistler', 'Gwen', 'bird', '',	'1997-12-09', NULL);
            INSERT INTO pet VALUES ('Slim', 'Benny', 'snake', 'm', '1996-04-29', NULL);
          </LI>

          <LI>SELECT * FROM pet WHERE birth >= '1998-01-01'</LI>
          <LI>SELECT * FROM pet WHERE species = 'dog' AND sex = 'f';</LI>
          <LI>SELECT * FROM pet WHERE species = 'snake' OR species = 'bird';</LI>
          <LI>SELECT * FROM pet WHERE (species = 'cat' AND sex = 'm') OR (species = 'dog' AND sex = 'f')</LI>
          <LI>SELECT name, birth FROM pet</LI>
          <LI>SELECT name, birth FROM pet ORDER BY birth;</LI>
          <LI>SELECT name, birth, CURDATE(), TIMESTAMPDIFF(YEAR,birth,CURDATE()) AS age FROM pet;</LI>
          <LI>UPDATE pet SET owner='Doug' WHERE name = 'Slim'</LI>
          <LI>DELETE FROM pet WHERE sex = 'm'</LI>
        </OL>
      </Section>
      <Section title='Demo' level={1}>
        <Table>
          <TR>
            <TD>Name starts with</TD>
            <TD>SELECT * FROM employees WHERE first_name LIKE 'D%'</TD>
          </TR>
          <TR>
            <TD>Greater than a number</TD>
            <TD>SELECT * FROM salaries WHERE salary > 80000 </TD>
          </TR>
        </Table>
      </Section>
      <Section title='Exercises' level={1}>
        <Table>
          <TR>
            <TD><A href='https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all'>Select All</A></TD>
            <TD>Change to select from a different table</TD>
          </TR>
          <TR>
            <TD><A href='https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_columns'>Select Columns</A></TD>
            <TD>Change to select two columns from the Suppliers table</TD>
          </TR>
          <TR>
            <TD><A href='https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_no_distinct'>No Distince</A></TD>
            <TD>Note the number of rows returned and look for duplicates</TD>
          </TR>
          <TR>
            <TD><A href='https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_distinct'>Select Distinct</A></TD>
            <TD>Note the number of rows returned and the absence of duplicates</TD>
          </TR>
          <TR>
            <TD><A href='https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where'>Select Where</A></TD>
            <TD>Instead of specifying a country in the WHERE clause, specify a city.</TD>
          </TR>
          <TR>
            <TD><A href='https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_number'>Selet Where Number</A></TD>
            <TD>Change to get a supplier from the suppliers table.</TD>
          </TR>
        </Table>
      </Section>
    </div>
  )
};

export default Introduction
