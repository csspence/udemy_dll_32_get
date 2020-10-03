/*
Udemy
JavaScript Algorithms and Data Structures Masterclass

DLL get - Exercise

get

This internal/helper function should find a node at a specified index in a DoublyLinkedList.  It should return the found node.
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;  
        this.length = 0;    
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    get(index){
      let node;
      let counter;
      if(index < 0 || index > this.length) {
        return null;
      } else if(index < this.length / 2) {
        node = this.head;
        counter = 0;
        while(counter !== index) {
          node = node.next;
          counter++;
        }
      } else {
        node = this.tail;
        counter = this.length - 1;
        while(counter !== index) {
          node = node.prev;
          counter--;
        }
      }
      return node;
    }
}