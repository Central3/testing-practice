import calculator from "./calculator";

const calc = calculator();

describe("addition", () => {
  test("add 2 + 2", () => {
    expect(calc.add(2, 2)).toBe(4);
  });

  test("add 2.5 + 3.3", () => {
    expect(calc.add(2.5, 3.3)).toBeCloseTo(5.8);
  });

  test("add strings", () => {
    expect(calc.add("haha", " ah")).toBe("Expect numbers");
  });
});

describe("subtraction", () => {
  test("subtract 2 - 2", () => {
    expect(calc.subtract(2, 2)).toBe(0);
  });

  test("subtract 2.5 - 1.2", () => {
    expect(calc.subtract(2.5, 1.2)).toBeCloseTo(1.3);
  });

  test("subtract 2 - 5", () => {
    expect(calc.subtract(2, 5)).toBe(-3);
  });
});

describe("multiplication", () => {
  test("multiply 2 * 2", () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  test("multiply 2.5 * 3.3", () => {
    expect(calc.multiply(2.5, 3.3)).toBeCloseTo(8.25);
  });
});

describe("divide", () => {
  test("divide 4 / 2", () => {
    expect(calc.divide(4, 2)).toBe(2);
  });

  test("divide 6 / 2", () => {
    expect(calc.divide(6, 2)).toBe(3);
  });

  test("divide 2 / 10", () => {
    expect(calc.divide(2, 10)).toBeCloseTo(0.2);
  });
});
