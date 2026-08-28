import Node from "./Node.js";

const nullNode = Node();
const valueNode = Node("value");

describe("Node Properties", () => {
  test("Happy path", () => {
    expect(Node);
  });
  test("Node returns an object with value and nextNode properties set to null by default", () => {
    expect(nullNode.value).toBe(null);
    expect(nullNode.nextNode).toBe(null);
  });
  test("Node return an object with custom value is specified", () => {
    expect(valueNode.value).toBe("value");
    expect(valueNode.nextNode).toBe(null);
  });
  test("changeValue(value) will update the value of Node", () => {
    nullNode.changeValue("newValue");
    expect(nullNode.value).toBe("newValue");
  });
});
