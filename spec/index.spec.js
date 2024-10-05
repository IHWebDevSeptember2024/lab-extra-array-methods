// Jasmine Tests
describe("Array Manipulation Tests", function () {
  // Iteration 1
  describe("multiplyByTwo", function () {
    it("should return [2, 4, 6, 8, 10] when given [1, 2, 3, 4, 5]", function () {
      expect(multiplyByTwo([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
    });
    it("should return an empty array when given an empty array", function () {
      expect(multiplyByTwo([])).toEqual([]);
    });
  });

  // Iteration 2
  describe("getVideogamesWithDiscount", function () {
    it("should apply a 10% discount to all games", function () {
      const input = [
        { name: "Breath of the wild", price: 80 },
        { name: "Super Mario Odyssey", price: 90 },
      ];
      const expected = [
        { name: "Breath of the wild", priceWithDiscount: 72 },
        { name: "Super Mario Odyssey", priceWithDiscount: 81 },
      ];
      expect(getVideogamesWithDiscount(input)).toEqual(expected);
    });
  });

  // Iteration 3
  describe("getBooks", function () {
    it("should return books with more than 300 pages", function () {
      const input = [
        { name: "The Lord of the Rings", pages: 500 },
        { name: "The Hobbit", pages: 400 },
        { name: "The Little Prince", pages: 100 },
      ];
      const expected = [
        { name: "The Lord of the Rings", pages: 500 },
        { name: "The Hobbit", pages: 400 },
      ];
      expect(getBooks(input)).toEqual(expected);
    });
  });

  // Iteration 4
  describe("getTotalQuantity", function () {
    it("should return the total quantity of all products", function () {
      const input = [
        { name: "Samsung Smart TV", quantity: 30 },
        { name: "iPhone 12", quantity: 20 },
      ];
      expect(getTotalQuantity(input)).toEqual(50);
    });
  });

  // Iteration 5
  describe("getAveragePrice", function () {
    it("should return the average price of all electronics", function () {
      const input = [
        { name: "Samsung Smart TV", price: 500, category: "electronics" },
        { name: "iPhone 12", price: 1000, category: "electronics" },
      ];
      expect(getAveragePrice(input)).toEqual(750);
    });
  });

  // Iteration 6
  describe("getCommonElements", function () {
    it("should return [5, 4, 3] for [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7]", function () {
      expect(getCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
        5, 4, 3,
      ]);
    });
  });

  // Iteration 7
  describe("getLongestConsecutiveSequence", function () {
    it("should return the longest sequence of consecutive integers", function () {
      const input = [1, 3, 2, 4, 5, 7, 8, 9];
      const expected = [1, 2, 3, 4, 5];
      expect(getLongestConsecutiveSequence(input)).toEqual(expected);
    });
  });
});
