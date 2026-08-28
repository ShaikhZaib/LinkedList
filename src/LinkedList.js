import Node from "./Node.js";

const LinkedList = () => {
  let HEAD = null;
  let length = 0;

  // append method.
  const append = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD === null) return (HEAD = newNode);

    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  };

  // prepend method.
  const prepend = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD === null) {
      return (HEAD = newNode);
    }
    newNode.nextNode = HEAD;
    HEAD = newNode;
  };

  // Find size.
  const size = () => {
    if (!HEAD) return null;
    return length;
  };

  // Find head.
  const head = () => {
    if (!HEAD) return null;
    return HEAD.value;
  };

  // Find tail.
  const tail = () => {
    if (!HEAD) return null;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  };

  // Find a node at a given index.
  const at = (index) => {
    if (!HEAD) return null;
    let pointer = HEAD;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  // Removes the last element from the node
  const pop = () => {
    if (!HEAD) return null;
    // For a list with only one node.
    if (HEAD.nextNode === null) {
      HEAD = null;
    }

    // Find the pointer before the tail.
    at(size() - 2).nextNode = null;
    length--;
  };

  // Check if the list contains the value.
  const contains = (value) => {
    if (!HEAD) return null;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }

    return pointer.value === value;
  };

  // Find the index of the node in the list, null if not in the list.
  const findIndex = (value) => {
    if (!HEAD) return null;
    let index = 0;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return index;
      pointer = pointer.nextNode;
      index++;
    }

    return pointer.value === value ? index : null;
  };

  // Converts the list to string.
  const toString = () => {
    if (!HEAD) return null;
    let pointer = HEAD;
    let result = "";
    while (pointer.nextNode !== null) {
      result = result.concat(`( ${pointer.value} ) --> `);
      pointer = pointer.nextNode;
    }
    result = result.concat(`( ${pointer.value} ) --> null`);
    console.log(result);
    return result;
  };

  // Insert a node at a given index.
  const insertAt = (value, index) => {
    if (!HEAD) return null;
    const newNode = Node(value);
    length++;
    let pointer = HEAD;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    const nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
    newNode.nextNode = nextNode;
  };

  // Removes a node from the list from given index.
  const removeAt = (index) => {
    if (!HEAD) return null;
    if (index > length || index < 0) return;
    if (index === 0) {
      HEAD = HEAD.nextNode;
    } else {
      const prePointer = at(index - 1);
      prePointer.nextNode = prePointer.nextNode.nextNode;
    }
    length--;
  };

  // Return all the methods.
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
};

export default LinkedList;
