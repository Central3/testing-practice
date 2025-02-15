import reverseString from "./reverseString";

test("Reverse map", () => {
  expect(reverseString("map")).toBe("pam");
});

test("Reverse string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});
