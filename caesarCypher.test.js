import encrypt from "./caesarCypher";

test("Encrypt abc with a shift factor of 3", () => {
  expect(encrypt("abc", 3)).toBe("def");
});

test("Encrypt HeLLo with a shift factor of 3", () => {
  expect(encrypt("HeLLo", 3)).toBe("KhOOr");
});

test("Check non alphabetic characters", () => {
  expect(encrypt("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Check text wrapping for lower case", () => {
  expect(encrypt("xyz", 3)).toBe("abc");
});

test("Check text wrapping  for upper case", () => {
  expect(encrypt("XYZ", 3)).toBe("ABC");
});

test("Check for a shift factor greater than 26", () => {
  expect(encrypt("abc", 500)).toBe("ghi");
});
