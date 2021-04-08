# Greedy

[Week3](./week3)

- General Strategy
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

## Question

### Refuel car with least gas stations

- Safe move 选择最远能到达的gas station

### Group children 

Children in one group - age should not different more than one year

- Safe move 把孩子的年龄变成坐标点 从最左边点开始取一个长度为1的线段 依次找到需要几根线段

### Long hike Fractional Knapsack

可以分割的背包问题：背包中要装入零食 尽可能放入最多value的零食 可以切割零食 因此称为可以分割的背包问题

- Safe move 找到性价比(Value / Weight)最高的零食 优先放进去背包 

# Divide and Conquer

- Create a recursive solution
- Define a corresponding recurrence relation T (写出递推表达式)
- Determine T(n) worst case runtime
- Optionally, create iterative solution