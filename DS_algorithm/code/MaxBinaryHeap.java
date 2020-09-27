package code;

import java.util.Arrays;

public class MaxBinaryHeap {
    private int capacity = 10; // 数组大小
    private int size = 0; // 元素个数

    public int[] items = new int[capacity];

    private int leftChildIndex(int parentIndex) {
        return 2 * parentIndex + 1;
    }

    private int rightChildIndex(int parentIndex) {
        return 2 * parentIndex + 2;
    }

    private int parentIndex(int childIndex) {
        return (childIndex - 1) / 2;
    }

    private boolean hasLeftChild(int index) {
        return leftChildIndex(index) < size;
    }

    private boolean hasRightChild(int index) {
        return rightChildIndex(index) < size;
    }

    private boolean hasParent(int index) {
        return parentIndex(index) >= 0;
    }

    private int leftChild(int index) {
        return items[leftChildIndex(index)];
    }

    private int rightChild(int index) {
        return items[rightChildIndex(index)];
    }

    private int parent(int index) {
        return items[parentIndex(index)];
    }

    public int extractMax() {
        if (size == 0)
            throw new IllegalStateException();
        int item = items[0]; // grab the max
        items[0] = items[size - 1]; // swap with the last
        size--; // delete laset entry (max)
        heapifyDown(); // reorder
        return item; // return
    }

    public void ensureCapacity() {
        if (size == capacity) {
            items = Arrays.copyOf(items, capacity * 2);
            capacity *= 2;
        }
    }

    public void insert(int item) {
        ensureCapacity();
        items[size] = item; // put in the last
        size++;
        heapifyUp();
    }

    public void heapifyUp() {
        int index = size - 1; // start at last element
        // while my parents are less than me...

        while (hasParent(index) && parent(index) < items[index]) {
            swap(parentIndex(index), index);
            index = parentIndex(index); // walk upwards to next node
        }
    }

    public void heapifyDown() {
        int index = 0; // start from the top

        while (hasLeftChild(index)) {

            // take the larger of the two indexes
            int largerChildIndex = leftChildIndex(index);
            if (hasRightChild(index) && rightChild(index) > leftChild(index)) {
                largerChildIndex = rightChildIndex(index);
            }

            // now compare

            // if I am larger than the items of my two children...
            // then everything is good. I am sorted.
            if (items[index] > items[largerChildIndex]) {
                break;
            } else {
                // we are still not in order - swap
                swap(index, largerChildIndex);
            }

            // then move down to smaller child
            index = largerChildIndex;
        }
    }

    public void print() {
        for (int i = 0; i < size; i++) {
            System.out.println(i + "[" + items[i] + "]");
        }
    }

    private void swap(int indexOne, int indexTwo) {
        int temp = items[indexOne];
        items[indexOne] = items[indexTwo];
        items[indexTwo] = temp;
    }
}
