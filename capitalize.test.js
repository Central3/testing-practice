import capitalize from "./capitalize";

test("Capitalize sum", () => {
  expect(capitalize("sum")).toBe("Sum");
});

test("Capitalize open", () => {
  expect(capitalize("open")).toBe("Open");
});

test("Capitalize sTart", () => {
  expect(capitalize("sTart")).toBe("Start");
});

test("Capitalize capiTALIze", () => {
  expect(capitalize("capiTALIze")).toBe("Capitalize");
});

test("Capitalize empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Capitalize space", () => {
  expect(capitalize(" ")).toBe("");
});
