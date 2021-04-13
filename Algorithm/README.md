# Algorithm

# Greedy

[Week3](./week3)

- **General Strategy**
  - Make a greedy choice
  - **Prove** that it is a **safe move**
  - Reduce to a **subproblem**
  - Solve the **subproblem**
  - Analyze runtime
- Reduction to Subproblem
  - Make some greedy choice
  - Reduce to a smaller problem
  - Iterate

- Safe move
  - A move is called safe if there is an optimal solution consistent with this first move
  - Not all first moves are safe
  - Often greedy moves are not safe

[Back to top](#Algorithm)

---

### Question

#### Refuel car with least gas stations

- Safe move 选择最远能到达的gas station

#### Group children 

Children in one group - age should not different more than one year

- Safe move 把孩子的年龄变成坐标点 从最左边点开始取一个长度为1的线段 依次找到需要几根线段

#### Long hike Fractional Knapsack

可以分割的背包问题：背包中要装入零食 尽可能放入最多value的零食 可以切割零食 因此称为可以分割的背包问题

- Safe move 找到性价比(Value / Weight)最高的零食 优先放进去背包 

[Back to top](#Algorithm)

---

# Divide and Conquer

- Create a recursive solution
- Define a corresponding recurrence relation T (写出递推表达式)
- Determine T(n) worst case runtime
- Optionally, create iterative solution

[Back to top](#Algorithm)

---

## Binary Search

O(LogN)

[Back to top](#Algorithm)

---

## Polynomial Mulyiplication

多项式乘法

Naive idea: Brutual force - O(n)

Better idea: 提出最高系数的一半 形成四个多项式 再进行运算 divide and conquer - 但是依旧是 O(n)

![](./images/naiveDivideConquerPolyMutiple.png)

- Karatsuba approach

![](./images/karatsuba.png)

- Karatsuba approach example

![](./images/karatsubaExample.png)

[Back to top](#Algorithm)

---

## Master Theorem

- used to calc the runtime of **recurrence problems**

1. <font color=red>计算一下level 1 和 level 2 的运算量</font>
2. <font color=red>判断是否第一层和第二层的运算量是相同的，如果是那就是 **case 2**</font>
3. <font color=red>判断如果第一层的运算量大于第二层，那么第一层的复杂度就是dominate，所以符合 **case 1**</font>
4. <font color=red>判断如果第二层的运算量大于第一层，那么说明运算量是一层一层增加的，因此最后一层的复杂度dominate，所以符合 **case 3** logba 就是leaves 叶子的数量</font>

![](./images/masterTheorem.png)

> When I have a recurrence of this rough form, I look at the amount of work 
>
> done at the first level and at the second level (which is a very easy calculation) and 
>
> then I just say to myself Is that the same amount of work? 
>
> If it's the same amount of work it's going to be the same amount of work 
>
> all the way down and so we're going to be in case two. 
>
> So it's going to be the amount of work at the first level, 
>
> which we known is O(n to the d), times log n because there are that many levels. 
>
> On the other hand, if the first term is larger than the second term 
>
> I know the first term is going to dwarf all the other terms. 
>
> And so, we're left with just O(n to the d). 
>
> And finally, if the first term is less than the second term, 
>
> I know they're going to keep increasing and it's the bottom term that I need.

[Back to top](#Algorithm)

---

