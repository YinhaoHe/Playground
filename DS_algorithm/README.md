# Data Structure

## Array

### Array DS vs Array API

- Plain old array - Data Structure 静态数组

```java
int[] foo = new int[10];
```

- Collection built on top of an Array 动态数组

```java
ArrayList<Integer> bar = new ArrayList<Integer>();
```

| Data structures | APIS    | APIS            |
| --------------- | ------- | --------------- |
| Array           | used in | ArrayList       |
| Linked List     | used in | Stacks & Queues |
| Binary Tree     | used in | Binary Heap     |

---

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

---

### Array Killer features 

Get/Set/Random access in O(1) constant time

---

### Insert into Array

- copy up and make room for the index
- insert the value into that space
- ```insert(1, "b")```O(n) Linear time

---

### Delete in Array

- copy down to overwrite 
- O(n) Linear time

---

### Dynamic Arrays

- Array's capacity is fixed
- 只能通过创建一个新的Array 来增加Array的space
- 创建新的Array会先double之前的Array的capacity 然后 copy旧的到新的里面
- 最后添加进去新的元素 （会浪费一些空间，因为一定会double之前的数组的空间）

---

### Build my dynamicArray

[code](./code/dynamicArray.java)

 ```java
package code;

public class DynamicArray<T> {
    private Object[] data;

    // counter the number of elements in our array
    private int size = 0;

    // The capacity of our array - or how many elements it can hold.
    // What we double when the number of elements exceeds the capacity of the array.
    private int initialCapacity;

    // 创建一个新的动态数组
    public DynamicArray(int initialCapacity) {
        this.initialCapacity = initialCapacity;
        data = new Object[initialCapacity];
    }

    // O(1)
    public String get(int index) {
        return (String) data[index];
    }

    // O(1)
    public void set(int index, String value) {
        data[index] = value;
    }

    // O(n)
    public void insert(int index, String value) {

        // check size
        if (size == initialCapacity) {
            resize();
        }
        // copy up
        for (int j = size; j > index; j--) {
            data[j] = data[j - 1];
        }

        // Insert
        data[index] = value;
        size++;
    }

    // O(n)
    public void delete(int index) {

        // copy down
        for (int i = index; i < size - 1; i++) {
            data[i] = data[i + 1];
        }

        // clear last element of array
        data[size - 1] = null;

        // size minus one
        size--;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    // O(n)
    public boolean contains(String value) {
        for (int i = 0; i < size; i++) {
            String curVal = (String) data[i];
            if (curVal.equals(value)) {
                return true;
            }
        }
        return false;
    }

    public void print() {
        for (int i = 0; i < size; i++) {
            System.out.println(data[i]);
        }
    }

    public void add(String value) {
        if (size == initialCapacity)
            resize();

        data[size] = value;
        size++;
    }

    public void resize() {
        // 创建一个新的array
        Object[] newData = new Object[initialCapacity * 2];
        // 把旧的array copy到新的里面去
        for (int i = 0; i < initialCapacity; i++) {
            newData[i] = data[i];
        }
        // 将新创建的array覆盖旧的
        data = newData;
        // 更新array的capacity
        initialCapacity = initialCapacity * 2;
    }

    public int size() {
        return size;
    }

}
 ```

---

### Error handling

[E.G.](https://www.runoob.com/java/java-exceptions.html)

```java
public void set(int index, String value) {
  if (index < initialCapacity) {
    data[index] = value;
  } else {
    throw new IndexOutofBoundsException("Index is too big.")
  }
}
```

---

### Interview Array

- get/set - O(1) 
- insert - O(n) 
- Delete - O(n)
- Random access - 使用index访问任何元素都巨快
- Fixed capacity - 数组大小一旦声明就是定好的不能改变
- Double when resize - 当要向动态数组中插入元素时 一旦数组不够大 就会double space 

---

## Linked List

### Linked List vs Array

- Linked List
  - Good:
    - No indexes
    - No fixed capacity
    - super fast insert/delete O(1) - constant time
    - can grow incrementally
  - Bad:
    - No random access
    - Get/set is O(n) - linear time
  - Commonly used in Stacks and Queues
- Array
  - [See the previous section](#Array)

---

### Add Front

- 首先创建一个 new node
- 把 new node 的 pointer 指向 current head node
- 把 current head node 的 pointer 指向 new node

---

### getFirst

- ```return head.data```

### getLast

- 判断是否```head == null```
- find LinkedList tail
- 返回尾部的data

### addBack

- 创建一个新Node
- 找到尾部
- 链表尾的next 指向newNode