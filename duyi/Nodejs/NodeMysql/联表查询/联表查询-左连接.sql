-- 注意新部门，表内数据最少都会出现一次，哪怕另一侧没有匹配

SELECT * 
FROM employee as e LEFT JOIN department as d
on d.id = e.deptId


SELECT * 
FROM department as d LEFT JOIN employee as e
on d.id = e.deptId
