-- 笛卡尔积 查询
-- 创建一张team表，记录足球队
-- 查询出对阵表
SELECT t1.name 主场, t2.name 客场
FROM team as t1, team as t2
WHERE t1.id != t2.id
