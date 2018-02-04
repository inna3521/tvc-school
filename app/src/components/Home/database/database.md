# Database


## SQL Statements
SELECT what_to_select
FROM which_table
WHERE conditions_to_satisfy;


## Dates
- Date format YYYY-MM-DD (us, uk diff)




## Types of databases
- Relational (SQL)
  - SQL Server
  - Oracale DB
  - MySQL
- No-SQL
  - Organize data differently but not in rows, columns & tables
  - Counchbase, MongoDB & Redis are very popular


######
- SELECT name, species, birth FROM pet ORDER BY species, birth DESC
- sum
- SELECT * FROM pet WHERE name LIKE 'b%';
- SELECT * FROM pet WHERE name LIKE '%fy';
- SELECT * FROM pet WHERE name REGEXP '^b';

CREATE TABLE pet (
    name VARCHAR(20),
    owner VARCHAR(20),
    species VARCHAR(20),
    sex CHAR(1),
    birth DATE,
    death DATE);

    INSERT INTO pet VALUES ('Fluffy', 'Harold', 'cat', 'f', '1993-02-04', '');
    INSERT INTO pet VALUES ('Claws', 'Gwen', 'cat', 'm', '1994-03-17', '');
    INSERT INTO pet VALUES ('Buffy', 'Harold', 'dog', 'f', '1989-05-13', '');
    INSERT INTO pet VALUES ('Fang', 'Benny', 'dog', 'm', '1990-08-27', '');
    INSERT INTO pet VALUES ('Bowser', 'Diane', 'dog', 'm', '1979-08-31', '1995-07-29');
    INSERT INTO pet VALUES ('Chirpy', 'Gwen', 'bird', 'f', '1998-09-11', '');
    INSERT INTO pet VALUES ('Whistler', 'Gwen', 'bird', '',	'1997-12-09', '');
    INSERT INTO pet VALUES ('Slim', 'Benny', 'snake', 'm', '1996-04-29', '');



## Queries
- CRUD
- Join
- Lookup
- SELECT * FROM pet WHERE species = 'snake' OR species = 'bird';
- SELECT * FROM pet WHERE (species = 'cat' AND sex = 'm')



SELECT * FROM employees WHERE hire_date > '2000-01-01'

SELECT COUNT(*) FROM employees

SELECT (SELECT COUNT(emp_no) FROM employees WHERE gender = 'F') AS 'female', (SELECT COUNT(emp_no) FROM employees WHERE gender = 'M') AS 'male';
> Is it correct? Check the sum, should equal 300,024

### GROUP BY
SELECT COUNT(*) FROM `titles`;
SELECT title, COUNT(*) FROM titles GROUP BY title;
- 443308 how come there are more than total employees


## Make a Database

## Data types
- Numbers https://dev.mysql.com/doc/refman/5.7/en/numeric-type-overview.html
- Date & Time: https://dev.mysql.com/doc/refman/5.7/en/date-and-time-type-overview.html
- Strings: https://dev.mysql.com/doc/refman/5.7/en/string-type-overview.html
