# Data Structure

## Array

### Array DS vs Array API

- Plain old array - Data Structure

```java
int[] foo = new int[10];
```

- Collection built on top of an Array

```java
ArrayList<Integer> bar = new ArrayList<Integer>();
```

| Data structures | APIS    | APIS            |
| --------------- | ------- | --------------- |
| Array           | used in | ArrayList       |
| Linked List     | used in | Stacks & Queues |
| Binary Tree     | used in | Binary Heap     |

### Three things about Arrays

- Arrays can contain anything

```java
Object[] object = new Object[10];
String[] string = new String[10];
Person[] person = new Person[10];
```

- Fixed size 

Array cannot grow compared to LinkedList

- Random access

Array can be accessed throught index in O(1)

### Array Killer features 

Get/Set/Random access in O(1) constant time

### Insert into Array

- copy up and make room for the index
- insert the value into that space
- ```insert(1, "b")```O(n) Linear time