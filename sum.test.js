const sum = require("./sum");

test("1 + 2 should equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("An error will show up when the input is not an integer", () => {
  expect(() => sum(1, "2")).toThrow("Integer input is required!");
});
