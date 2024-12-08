SELECT * FROM employee
WHERE `name` like '张%' AND (ismale = 0 AND salary >= 12000
OR
birthday >= '1996-1-1');

