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
- SELECT name, species, birth FROM pet ORDER BY species, birth DESC
- sum
- SELECT * FROM pet WHERE name LIKE 'b%';
- SELECT * FROM pet WHERE name LIKE '%fy';
- SELECT * FROM pet WHERE name REGEXP '^b';





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


## Make a Database

## Data types
- Numbers https://dev.mysql.com/doc/refman/5.7/en/numeric-type-overview.html
- Date & Time: https://dev.mysql.com/doc/refman/5.7/en/date-and-time-type-overview.html
- Strings: https://dev.mysql.com/doc/refman/5.7/en/string-type-overview.html
