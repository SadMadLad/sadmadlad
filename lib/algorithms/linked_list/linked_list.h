#pragma once
#include <iostream>
#include <stdexcept>

template <typename T> class Node {
public:
  T value;
  Node<T> *next;

  Node() : value(T()), next(nullptr) {}
  Node(T value) : value(value), next(nullptr) {}
  Node(T value, Node *next) : value(value), next(next) {}
  Node(const Node &node) : value(node.value), next(node.next) {}

  void print() { std::cout << value << std::endl; }
};

template <typename T> class LinkedList {
public:
  Node<T> *head;

  LinkedList() : head(nullptr) {}
  LinkedList(Node<T> *node) : head(node) {}

  void print() {
    Node<T> *temp = head;

    while (temp) {
      temp->print();
      temp = temp->next;
    }
  }

  void append(T value) { _append(value); }
  void prepend(T value) { _prepend(value); }
  int length() { return _length(); }
  void swap(T val1, T val2) { _swap(val1, val2); }
  Node<T> *minNode() { return _min(); };
  T min() { return _min()->value; }
  Node<T> *maxNode() { return _max(); }
  T max() { return _max()->value; }
  bool isEmpty() { return !head; }
  bool isOne() { return !isEmpty() && !head->next; }

  ~LinkedList() {
    Node<T> *current = head;
    while (current) {
      Node<T> *next = current->next;

      delete current;
      current = next;
    }
  }

private:
  void _append(T value) {
    if (!head) {
      head = new Node<T>(value);
    } else {
      Node<T> *temp = head;
      while (temp->next)
        temp = temp->next;

      temp->next = new Node(value);
    }
  }

  void _prepend(T value) {
    if (!head) {
      head = new Node<T>(value);
    } else {
      Node<T> *temp = new Node<T>(value, head);

      head = temp;
    }
  }

  int _length() {
    if (!head)
      return 0;

    Node<T> *temp = head;

    int count = 0;

    while (temp) {
      count++;
      temp = temp->next;
    }

    return count;
  }

  void _swap(T val1, T val2) {
    if (isEmpty() || isOne()) {
      std::cout << "Linked List too small. Nothing to swap\n";
      return;
    }

    Node<T> *temp1 = head;
    Node<T> *temp2 = head;

    while (temp1 && temp1->value != val1) {
      temp1 = temp1->next;
    }
    while (temp2 && temp2->value != val2) {
      temp2 = temp2->next;
    }

    if (temp1 && temp2) {
      std::swap(temp1->value, temp2->value);
    } else {
      std::cout << "One or both values not found. Cannot swap\n";
    }
  }

  Node<T> *_min() {
    emptyCheck();

    Node<T> *temp = head;
    Node<T> *min = temp;

    while (temp) {
      if (temp->value < min->value)
        min = temp;
      temp = temp->next;
    }

    return min;
  }

  Node<T> *_max() {
    emptyCheck();

    Node<T> *temp = head;
    Node<T> *max = temp;

    while (temp) {
      if (temp->value > max->value)
        max = temp;

      temp = temp->next;
    }

    return max;
  }

  void emptyCheck() {
    if (isEmpty())
      throw std::runtime_error("Linked List too small\n");
  }
};
