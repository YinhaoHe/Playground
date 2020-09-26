package code;

import java.util.EmptyStackException;

public class Stack {

    // 使用链表作为基础数据结构实现

    private class Node {
        private int data;
        private Node next;

        private Node(int data) {
            this.data = data;
        }
    }

    private Node head;
    private int size;

    public boolean isEmpty() {
        return head == null;
    }

    public int peek() {
        return head.data;
    }

    public void push(int data) {

        // check head
        if (head == null) {
            head.data = data;
        }

        // if head not null
        // create new node
        Node newNode = new Node(data);

        // new node next 指向 current head
        newNode.next = head;

        // 把new node 设为头
        head = newNode;

        // size 加一
        size++;
    }

    public int pop() {

        // check head
        if (head == null) {
            // throw new IllegalStateException("Empty stack!");
            throw new EmptyStackException();
        }

        // store data
        int data = head.data;

        // point head to next
        head = head.next;

        // size minus one
        size--;

        return data;
    }

    public int size() {
        return size;
    }
}
