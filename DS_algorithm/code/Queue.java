package code;

public class Queue {
    private class Node {
        private int data;
        private Node next;

        private Node(int date) {
            this.data = data;
        }
    }

    private Node head; // remove things
    private Node tail; // add things

    public boolean isEmpty() {
        return head == null;
    }

    public int peek() {
        return head.data;
    }

    public void add(int data) {

        // create a new node
        // set tail.next = newNode
        // set new node to tail

        Node newNode = new Node(data);
        if (tail != null) {
            tail.next = newNode;
        }
        tail = newNode;

        // the case if you add the first element in the queue
        // 需要明确的记住这里头就是尾巴 因为只有一个元素在队列中
        if (head == null) {
            head = tail;
        }
    }

    public int remove() {

        // save the data
        // point head to the next
        // return data

        int data = head.data;
        head = head.next;

        // Queue being empty
        if (head == null) {
            tail = null;
        }

        return data;
    }
}
