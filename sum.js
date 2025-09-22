function sum(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Integer input is required!");
  }
  return a + b;
}

module.exports = sum; // <- THIS LINE IS VERY IMPORTANT
