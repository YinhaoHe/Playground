# Java

## Basics

### Main Method

- always static
- Keyword - main
- String[] args - 参数list

[Back to top](#Java)

---

### Primitive Types

#### Wrapper classes

- ```boolean, byte, char, short, int, long, float, double``` - 都是wrapper classes
- E.G. - ```int```, we use ```Integer```, and by doing that, it gives us ways to perform operations on an ```int```. -例如 ```Integer.MIN_VALUE, Integer.MAX_VALUE``` 

[Back to top](#Java)

---

#### Overflow and Underflow

- ```Integer.MIN_VALUE - 1``` 会变成 ```Integer.MAX_VALUE``` - underflow
- ```Integer.MAX_VALUE + 1``` 会变成 ```Integer.MIN_VALUE``` - overflow

[Back to top](#Java)

---

#### Width

- Byte - byte - 8 bits
- Short - short - 16 bits
- Integer - int - 32 bits
- Long - long - 64 bits - ``` long number = 100L; ```
- Float - float - single precision 单精度 - 32 bits - ``` float number = 5.25f; ```
- Double - double - double precision 双精度 - 64 bits - ``` double number = 5.25d; ```
- Character - char - 16 bits - 一个char只能存储一个字符
- Boolean - boolean - 8 bits

[Back to top](#Java)

---

#### Casting

- 强制类型转换

[Back to top](#Java)

---

### Java Package

- usually 使用公司域名 reverse 类似于路径
- com.google - ""项目目录" folder -> "com" folder-> "google" folder

[Back to top](#Java)

---

### String

- Immutable - every time modify a string, Java create a new one for us.

[Back to top](#Java)

---

#### Parse int from a string

```java
String numberASString = "2020";

int number = Integer.parseInt(numberASString);
double number = Double.parseDouble(numberASString);
```

[Back to top](#Java)

---

### Structures in Java

Not important, just FYI

- Operators - ```int a = b + c;``` - "+"
- Operands - ```int a = b + c;``` - "b and c"
- Expression - ```int a = b + c; ``` - ```a = b + c;``` 是expressions
- Statement - ```int a = b + c; ``` - 整句是statement
- Whitespace - 中间的空格 - 用来分隔
- Indentation - 代码缩紧 - 用来表示不同代码块 - easy to read
- Code Block - 两个大括号中间 - 表示一个代码块 - {} - if/else 负责一个代码块 - 一旦执行结束就会自动 delete 这个code block 中的变量

[Back to top](#Java)

---

### if And Or Not

- if()  等==  非等!=
- && 与
- || 或
- ! 非

[Back to top](#Java)

---

### Ternary Operator

- ```(a == b) ? A : B ```- （a == b） 就 A 否则 B

[Back to top](#Java)

---

### Abbreviating Operators

- ```i ++; ```
  - **Java 中 i++ 语句是需要一个临时变量取存储返回自增前的值，而 ++i 不需要**
  - 因此在 for 循环中尽量的使用 ++i 

- ```result += 2;```

[Back to top](#Java)

---

### Method

- Class 中的函数叫做 Method
- static method 可以在 main 函数中直接调用
- 如果不写 static 需要在 main 函数中先创建一个对象 再用对象.method 调用
- return -1; 通常用来表示 invalid. 

[Back to top](#Java)

---

#### Method Overloading

- same method name with different number of parameters
- Java 会根据不同参数调用不同 method
- only change the return type of method is not overloading - Error 

[Back to top](#Java)

---

### Control Flow Statements

#### switch

```java
int switchValue = 6;

switch(switchValue) {
    case 1:
        System.out.println("This is 1")
        break;
    case 2:

    case 3:

    default:
        blablabla..
        break;
}
```

[Back to top](#Java)

---

#### Loop List

```java
List<String> list = new ArrayList<String>();

// 方法1，Iterator迭代器遍历
Iterator<String> i = list.iterator();
while (i.hasNext()) {
  String s = i.next();
  System.out.println(s);
}

for(Iterator<String> iter = list.iterator(); iter.hasNext();) {
  System.out.println(iter.next());
}

//遍历Collection对象的传统方式
/* 建立一个Collection */
String[] strings = {"A"， "B"， "C"， "D"};
Collection stringList = java.util.Arrays.asList(strings);

/* 开始遍历 */
for (Iterator itr = stringList.iterator(); itr.hasNext();) {
	Object str = itr.next();
	System.out.println(str);
}

// 方法2，ListIterator迭代器遍历集合
ListIterator<String> lt = list.listIterator();
while (lt.hasNext()) {
  String ss = lt.next();
  System.out.println(ss);
}

// 方法3，普通for遍历集合
for (int x = 0; x < list.size(); x++) {
  String sss = list.get(x);
  System.out.println(sss);
}

// 方法4，增强for遍历集合
for (String ssss : list) {
  System.out.println(ssss);
}

```

[Back to top](#Java)

---

#### Loop set

```java
Set<String> set = new HashSet<String>();

// 方法1，Iterator迭代器遍历集合
Iterator<String> it = set.iterator();
while (it.hasNext()) {
  System.out.println(it.next());
}

// 方法2，增强for遍历集合
for (String s : set) {
  System.out.println(s);
}

```

[Back to top](#Java)

---

#### for-while-do while

- continue - 跳过这一次循环

- break - 跳出当前循环体 

```java
while(count != 6) {
  	System.out.println("Count value is " + count);
  	count++;
}

for(int i=6; i!= 6; i++) {
  	System.out.println("Count value is " + count);
}

count = 6;
do {
    System.out.println("Count value was " + count);
    count++;

    if(count >100) {
      break;
    }

} while(count != 6);
```

[Back to top](#Java)

---

### Scanner Input

```java
import java.util.Scanner;

public class Main {
  
  	public static void main(String[] args) {
      	Scanner scanner = new Scanner(System.in);
      
      	System.out.println("Enter name: ");
      	String name = scanner.nextLine();
      	scanner.nextLine(); // handle next line character (enter key)
      
      	System.out.println("Enter your year of birth: ");
      	int yearOfBirth = scanner.nextInt();
      	
      	scanner.close(); // 最好关闭scanner 可以release memory
    }
}
```

[Back to top](#Java)

---

## OOP

