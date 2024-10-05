// Jasmine Tests

// Iteration 1: Multiply Array Elements by Two
describe("multiplyByTwo", function() {
    it("should return a new array with each element multiplied by 2", function() {
      const input = [1, 2, 3, 4, 5];
      const output = multiplyByTwo(input);
      expect(output).toEqual([2, 4, 6, 8, 10]);
    });
  
    it("should not modify the original array", function() {
      const input = [1, 2, 3, 4, 5];
      const original = input.slice();
      multiplyByTwo(input);
      expect(input).toEqual(original);
    });
  });
  
  // Iteration 2: Videogame Discount
  describe("getVideogamesWithDiscount", function() {
    it("should return a new array with each game including a 10% discount", function() {
      const videogames = [
        { name: "Breath of the wild", price: 80 },
        { name: "Super Mario Odyssey", price: 90 },
        { name: "The Legend of Zelda: A Link to the Past", price: 70 },
        { name: "The last of us 3", price: 60 },
        { name: "The Witcher 3", price: 50 },
      ];
      const output = getVideogamesWithDiscount(videogames);
      const expected = [
        { name: "Breath of the wild", price: 80, discountedPrice: 72 },
        { name: "Super Mario Odyssey", price: 90, discountedPrice: 81 },
        { name: "The Legend of Zelda: A Link to the Past", price: 70, discountedPrice: 63 },
        { name: "The last of us 3", price: 60, discountedPrice: 54 },
        { name: "The Witcher 3", price: 50, discountedPrice: 45 },
      ];
      expect(output).toEqual(expected);
    });
  
    it("should not modify the original array", function() {
      const videogames = [
        { name: "Breath of the wild", price: 80 },
        { name: "Super Mario Odyssey", price: 90 },
      ];
      const original = JSON.parse(JSON.stringify(videogames));
      getVideogamesWithDiscount(videogames);
      expect(videogames).toEqual(original);
    });
  });
  
  // Iteration 3: Filter Books by Page Count
  describe("getBooks", function() {
    it("should return books with 300 or more pages", function() {
      const books = [
        { name: "The Lord of the Rings", pages: 500 },
        { name: "Harry Potter and the Philosopher's Stone", pages: 300 },
        { name: "The Hobbit", pages: 400 },
        { name: "The Chronicles of Narnia", pages: 200 },
        { name: "The Little Prince", pages: 100 },
      ];
      const output = getBooks(books);
      const expected = [
        { name: "The Lord of the Rings", pages: 500 },
        { name: "Harry Potter and the Philosopher's Stone", pages: 300 },
        { name: "The Hobbit", pages: 400 },
      ];
      expect(output).toEqual(expected);
    });
  
    it("should not modify the original array", function() {
      const books = [
        { name: "The Lord of the Rings", pages: 500 },
        { name: "Harry Potter and the Philosopher's Stone", pages: 300 },
      ];
      const original = JSON.parse(JSON.stringify(books));
      getBooks(books);
      expect(books).toEqual(original);
    });
  });
  
  // Iteration 4: Total Quantity of Products
  describe("getTotalQuantity", function() {
    it("should return the total quantity of all products", function() {
      const products = [
        { name: "Samsung Smart TV", quantity: 30 },
        { name: "iPhone 12", quantity: 20 },
        { name: "Macbook Pro", quantity: 10 },
        { name: "Lenovo ThinkPad", quantity: 40 },
        { name: "Dell XPS", quantity: 50 },
      ];
      const output = getTotalQuantity(products);
      expect(output).toBe(150);
    });
  
    it("should not modify the original array", function() {
      const products = [
        { name: "Samsung Smart TV", quantity: 30 },
        { name: "iPhone 12", quantity: 20 },
      ];
      const original = JSON.parse(JSON.stringify(products));
      getTotalQuantity(products);
      expect(products).toEqual(original);
    });
  });
  
  // Iteration 5: Average Price of Electronics
  describe("getAveragePrice", function() {
    it("should return the average price of electronics", function() {
      const products = [
        { name: "Samsung Smart TV", price: 500, category: "electronics" },
        { name: "iPhone 12", price: 1000, category: "electronics" },
        { name: "Macbook Pro", price: 2000, category: "electronics" },
        { name: "Lenovo ThinkPad", price: 300, category: "electronics" },
        { name: "Dell XPS", price: 400, category: "electronics" },
        { name: "The Lord of the Rings", price: 10, category: "books" },
        {
          name: "Harry Potter and the Philosopher's Stone",
          price: 20,
          category: "books",
        },
        { name: "The Hobbit", price: 30, category: "books" },
        { name: "The Chronicles of Narnia", price: 40, category: "books" },
        { name: "The Little Prince", price: 50, category: "books" },
      ];
      const output = getAveragePrice(products);
      const expectedAverage = (500 + 1000 + 2000 + 300 + 400) / 5; // 840
      expect(output).toBe(expectedAverage);
    });
  
    it("should not modify the original array", function() {
      const products = [
        { name: "Samsung Smart TV", price: 500, category: "electronics" },
        { name: "iPhone 12", price: 1000, category: "electronics" },
      ];
      const original = JSON.parse(JSON.stringify(products));
      getAveragePrice(products);
      expect(products).toEqual(original);
    });
  });
  
  // Iteration 6: Common Elements Between Arrays
  describe("getCommonElements", function() {
    it("should return the common elements between two arrays, sorted in descending order", function() {
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [3, 4, 5, 6, 7];
      const output = getCommonElements(arr1, arr2);
      expect(output).toEqual([5, 4, 3]);
    });
  
    it("should not contain duplicates", function() {
      const arr1 = [1, 2, 3, 3, 4, 5];
      const arr2 = [3, 3, 4, 5, 6, 7];
      const output = getCommonElements(arr1, arr2);
      expect(output).toEqual([5, 4, 3]);
    });
  
    it("should not modify the original arrays", function() {
      const arr1 = [1, 2, 3];
      const arr2 = [2, 3, 4];
      const originalArr1 = arr1.slice();
      const originalArr2 = arr2.slice();
      getCommonElements(arr1, arr2);
      expect(arr1).toEqual(originalArr1);
      expect(arr2).toEqual(originalArr2);
    });
  });
  
  // Iteration 7: Longest Consecutive Sequence
  describe("getLongestConsecutiveSequence", function() {
    it("should return the longest sequence of consecutive integers, sorted in ascending order", function() {
      const arr = [1, 3, 2, 4, 5, 7, 8, 9];
      const output = getLongestConsecutiveSequence(arr);
      expect(output).toEqual([1, 2, 3, 4, 5]);
    });
  
    it("should handle multiple sequences and pick the longest one", function() {
      const arr = [100, 4, 200, 1, 3, 2];
      const output = getLongestConsecutiveSequence(arr);
      expect(output).toEqual([1, 2, 3, 4]);
    });
  
    it("should not modify the original array", function() {
      const arr = [1, 2, 3];
      const originalArr = arr.slice();
      getLongestConsecutiveSequence(arr);
      expect(arr).toEqual(originalArr);
    });
  });
  