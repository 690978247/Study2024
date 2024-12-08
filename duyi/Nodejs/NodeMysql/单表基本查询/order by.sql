SELECT *, case ismale
when 1 then '男'
else '女'
end sex FROM employee
-- WHERE `name` like '张%' AND (ismale = 0 AND salary >= 12000
-- OR
-- birthday >= '1996-1-1')
ORDER BY sex asc, salary desc;

