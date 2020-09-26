package code;

public class LinkedList {

    public class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
        }
    }

    private Node head;

    // O(1)
    public void addFront(int data) {

        // Create new Node
        Node newNode = new Node(data);

        // if head ...
        if (head == null) {
            head = newNode;
            return;
        }

        // Set its next to the current head
        newNode.next = head;

        // Set current head be the new head
        head = newNode;
    }

    // O(1)
    public int gerFirst() {
        return head.data;
    }

    // O(n)
    public int getLast() {
        if (head == null) {
            throw new IllegalStateException("Empty List!");
        }
        Node current = head;

        // Find tail
        while (current.next != null) {
            current = current.next;
        }

        // When tail
        return current.data;
    }

    // O(n)
    public void addBack(int data) {
        Node newNode = new Node(data);

        // if no head ... set tail
        if (head == null) {
            head = newNode;
            return;
        }

        // Find tail
        Node current = head;

        while (current.next != null) {
            current = current.next;
        }

        // set tail' next to newNode
        current.next = newNode;
    }

    // O(n)
    public int size() {
        if (head == null) {
            return 0;
        }

        int count = 1;
        Node current = head;

        while (current.next != null) {
            current = current.next;
            count++;
        }

        return count;
    }

    // O(1)
    public void clear() {
        head = null;
    }

    // O(n)
    public void deleteValue(int data) {

        // if head ...
        if (head == null)
            return;

        if (head.data == data) {
            head = head.next;
        }

        // else we walk through
        Node current = head;

        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    public void print() {
        Node current = head;
        while (current.next != null) {
            System.out.println(current.data);
            current = current.next;
        }
    }

}
