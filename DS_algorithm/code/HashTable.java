package code;

import javax.swing.text.html.parser.Entity;

public class HashTable {

    // 哈希表就是一个数组 里面都是链表
    private int INITIAL_SIZE = 16;
    private HashEntry[] data; // LinkedList

    class HashEntry {
        String key;
        String value;
        HashEntry next;

        HashEntry(String key, String value) {
            this.key = key;
            this.value = value;
            this.next = null;
        }
    }

    HashTable() {
        data = new HashEntry[INITIAL_SIZE];
    }

    public void put(String key, String value) {

        // Get the index
        int index = getIndex(key);

        // Create the linked list entry
        HashEntry entry = new HashEntry(key, value);

        // if no colision
        if (data[index] == null) {
            data[index] = entry;
        } else {
            // handle collision by adding to the end of Linked List
            HashEntry entries = data[index];

            // walk to the end
            while (entries.next != null) {
                entries = entries.next;
            }
            // add new entry
            entries.next = entry;
        }
    }

    public String get(String key) {

        // get index
        int index = getIndex(key);

        // Get the current list of entries
        HashEntry entries = data[index];

        // 从链表中开始寻找对应的key
        while (entries != null) {
            if (entries.key.equals(key)) {
                return entries.value;
            }
            entries = entries.next;
        }
        return null;
    }

    private int getIndex(String key) {
        // get hashcode
        int hashCode = key.hashCode();
        System.out.println(hashCode);

        // convert into index
        int index = (hashCode & 0x7fffffff) & INITIAL_SIZE; // bitwise to make sure the index are all positive
        // int index = hashCode & INITIAL_SIZE;

        return index;
    }
}
