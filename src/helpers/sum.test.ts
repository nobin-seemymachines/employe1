import sum from "./sum";

describe("sum of two numbers", () => {
  it("adds 2 + 6 = 8 ", () => {
    expect(sum(2, 6)).toBe(8);
  });
  it("adds 8 + 6 = 8 ", () => {
    expect(sum(8, 6)).toBe(14);
  });
  it("adds 2 + 6 = 8 ", () => {
    expect(sum(2, 1)).toBe(3);
  });
});
