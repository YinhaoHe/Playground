## SQL

- **NOT CASE SENSITIVE**

### DBMS

- relational db
- NoSQL non relational db

### SELECT

- 可以使用加减乘除

```sql
USE sql_store;

SELECT * FROM customers

SELECT 
		last_name, 
    first_name, 
    points, 
    (points + 10) * 100 AS 'discount factor'
From customers
```

- 获得唯一的数据 DISTINCT

```sql
SELECT DISTINCT state
FROM customers
```

### WHERE

- 用于选择条件

```sql
SELECT *
FROM customers
WHERE points > 3000

SELECT *
FROM customers
WHERE state = 'VA'

SELECT *
FROM customers
WHERE state != 'VA'

SELECT *
FROM customers
WHERE birth_date > '1990-01-01'
```

### Combined search AND OR NOT

- AND 优先级高于 OR
- 跟算数运算符一样 可以使用括号来明确优先级

```sql
SELECT *
FROM Customers
WHERE birth_date > '1990-01-01' OR points > 1000;
```

### IN

- 在多个数值中选择 
- 可以使用NOT IN

```sql
SELECT *
FROM Customers
WHERE state IN ('VA', 'FL', 'GA')

SELECT *
FROM Customers
WHERE state NOT IN ('VA', 'FL', 'GA')
```

### BETWEEN

- 在两个数值区间选择
- BETWEEN 1 AND 10 表示大于等于 1 小于等于 10

```sql
SELECT *
FROM Customers
WHERE points BETWEEN 1000 AND 3000
```

### LIKE

- 用于选择出一个特定pattern的结果
- ``` -- % any number of characters ```
- ``` -- _ single character ```

```sql
SELECT *
FROM Customers
WHERE last_name LIKE 'b%'
-- b之后可以有任意多字母

SELECT *
FROM Customers
WHERE last_name NOT LIKE 'b___y'
```

### REGEXP

- ``` WHERE last_name REGEXP 'field|mac' ``` 表示名字里带有field 或者 mac
- ``` WHERE last_name REGEXP '^field' ``` 表示名字开头是field
- ``` WHERE last_name REGEXP 'field&' ``` 表示名字结尾是field
- ``` WHERE last_name REGEXP 'e' ``` 表示名字里带有e
- ``` WHERE last_name REGEXP '[gim]e' ``` 表示名字里带有 ge, ie, me
- ``` WHERE last_name REGEXP '[a-h]e' ``` 表示名字里带有 a 到 h 和 e 结合

```sql
SELECT *
FROM Customers
WHERE last_name REGEXP 'field'

-- ^ beginning
-- $ end
-- | logical or
-- [abcd]
-- [a-f]
```

### IS NULL

- 判断空字段
- 也可以使用NOT选择到非NULL item

```sql
SELECT *
FROM Customers
WHERE phone IS NULL

SELECT *
FROM Customers
WHERE phone IS NOT NULL
```

### ORDER BY Clause

- 默认中是按照表的 id 排列 主键 并且唯一
- 可以使用 ORDER BY 来利用别的 column 排列所需要的数据
- 默认 ORDER BY 是按照 acesending order 升序排列

```sql
SELECT *
FROM Customers
ORDER BY first_name

-- 可以使用 DESC 变成倒叙排列
SELECT *
FROM Customers
ORDER BY first_name DESC

-- 可以同时使用两个 column 来进行排序
SELECT *
FROM Customers
ORDER BY state DESC, first_name DESC

-- 在 MySQL 中可以使用没有选中的 col 作为排序的 index
SELECT first_name, last_name
FROM Customers
ORDER BY state DESC
```

### LIMIT Clause

- 限制显示的数量 前 300 个
- 可以添加一个 offset 来实现 pagenation

```sql
SELECT *
FROM Customers
LIMIT 300

-- 表示跳过前 6 条数据 然后显示 3 条数据
SELECT *
FROM Customers
LIMIT 6, 3
```

### JOIN (INNER JOIN) INNER 可以省略

- 连接两个表 JOIN 
- 在 ON 后面写上连接表所需要的条件
- 要用到表名字 dot 列名字

```sql
SELECT *
FROM orders
JOIN customers 
	ON orders.customer_id = customers.customer_id

-- 当想要选择一个同时存在在两个 tables 里的一个 col 时 我们需要明确表名字，选择对应的 col

SELECT  order_id, orders.customer_id, first_name, last_name
FROM orders
JOIN customers 
	ON orders.customer_id = customers.customer_id

-- 由于表的名字重复了很多次 因此我们可以选择使用alias
-- FROM orders o 使用o代替表名字 从而简化code

SELECT  order_id, o.customer_id, first_name, last_name
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id
```

### Combine columns from tables across Databases

- 只需要给非当前使用的 DB 加 table 的 prefix

```sql
USE sql_store;

SELECT  *
FROM order_items oi
JOIN sql_inventory.products p
	ON oi.product_id = p.product_id

-- 这里我们 USE 的是 sql_inventory DB 所以需要在order_item 前面加上他对应的 db 的 prefix
USE sql_inventory;

SELECT  *
FROM sql_store.order_items oi
JOIN products p
	ON oi.product_id = p.product_id
```

### SELF JOIN

- 与两个table join几乎相同
- 但是需要使用两个不同的alias
- 同时在选择每一个 col 时候 也需要加上 prefix 因为这里的每一个列都同时存在于两个表中

```sql
USE sql_hr;

SELECT  
	e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM employees e
JOIN employees m
	ON e.reports_to = m.employee_id
```

### Join Multiple Tables

- 只需要连续写join就可以join多个表

```sql
USE sql_store;

SELECT  
	o.order_id,
    o.order_date,
	c.first_name,
    c.last_name,
    os.name AS status
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id
JOIN order_statuses os
	ON o.status = os.order_status_id
```

### Composite primary key JOIN table

- 两个主键同时用 对应一个 record

```sql
-- Compound joint condition
USE sql_store;

SELECT * 
FROM order_items oi
JOIN order_item_notes oin
	ON oi.order_id = oin.order_id
  AND oi.product_id = oin.product_id

```

### Implicit join syntax

- **NEVER USE THIS**

```sql
SELECT *
FROM orders o, customers c
WHERE o.customer_id = c.customer_id
```

### LEFT JOIN RIGHT JOIN (OUTER JOIN) OUTER 可以省略

- 不论 ON 后面的 condition 如何 如果使用了以下两种 JOIN的方式

- LEFT JOIN: 在左边的表中的所有信息都会被return到结果中
- RIGHT JOIN:  在右边的表中的所有信息都会被return到结果中

```sql
SELECT 
		c.customer_id,
    c.first_name,
    o.order_id
FROM customers c
LEFT JOIN orders o
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id
```

