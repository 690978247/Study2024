SELECT id, `name`,
case ismale
when 1 then '男'
else '女'
end as sex,
salary
FROM employee



SELECT id, `name`,
case 
when ismale = 1 then '男'
else '女'
end as sex,
salary
FROM employee