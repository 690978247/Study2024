SELECT id, `name`,
case 
when ismale = 1 then '男'
else '女'
end as sex,
case 
when salary >= 10000 then '高'
when salary >= 5000 then '中'
else '低'
end `level`,
salary
FROM employee;