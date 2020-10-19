# Java

## Main Method

- always static
- Keyword - main
- String[] args - 参数list

## Primitive Types

### Wrapper classes

- ```boolean, byte, char, short, int, long, float, double``` - 都是wrapper classes
- E.G. - ```int```, we use ```Integer```, and by doing that, it gives us ways to perform operations on an ```int```. -例如 ```Integer.MIN_VALUE, Integer.MAX_VALUE``` 

### Overflow and Underflow

- ```Integer.MIN_VALUE - 1``` 会变成 ```Integer.MAX_VALUE``` - underflow
- ```Integer.MAX_VALUE + 1``` 会变成 ```Integer.MIN_VALUE``` - overflow

### Width

- Byte - byte - 8 bits
- Short - short - 16 bits
- Integer - int - 32 bits
- Long - long - 64 bits - ``` long number = 100L; ```
- Float - float - single precision 单精度 - 32 bits - ``` float number = 5.25f; ```
- Double - double - double precision 双精度 - 64 bits - ``` double number = 5.25d; ```
- Character - char - 16 bits - 一个char只能存储一个字符
- Boolean - boolean - 8 bits

### Casting

- 强制类型转换

## Java Package

- usually 使用公司域名 reverse 类似于路径
- com.google - ""项目目录" folder -> "com" folder-> "google" folder