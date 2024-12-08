-- 两边都要有匹配匹配

SELECT * 
FROM employee as e INNER JOIN department as d
on d.id = e.deptId

SELECT e.`name` as empname, d.`name` as dptname
FROM employee as e INNER JOIN department as d
on d.id = e.deptId

-- 分割

SELECT *
FROM employee as e 
INNER JOIN department as d on d.id = e.deptId
INNER JOIN company c on d.companyId = c.id

SELECT e.`name` as empname, d.`name` as dptname, c.name as companyname
FROM employee as e 
INNER JOIN department as d on d.id = e.deptId
INNER JOIN company c on d.companyId = c.id
