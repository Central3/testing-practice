export default function calculator() {
  function add(x, y) {
    if (typeof x === "string" || typeof y === "string") return "Expect numbers";
    return x + y;
  }

  function subtract(x, y) {
    if (typeof x === "string" || typeof y === "string") return "Expect numbers";
    return x - y;
  }

  function multiply(x, y) {
    if (typeof x === "string" || typeof y === "string") return "Expect numbers";
    return x * y;
  }

  function divide(x, y) {
    if (typeof x === "string" || typeof y === "string") return "Expect numbers";
    return x / y;
  }

  return { add, subtract, multiply, divide };
}
