// Iteration 1: Multiply Array Elements by Two
function multiplyByTwo(arr) {
  return arr.map(function(num) {
    return num * 2;
  });
}

/*
Example:
Input: [1, 2, 3, 4, 5]
Expected Output: [2, 4, 6, 8, 10]
*/

// Iteration 2: Videogame Discount
function getVideogamesWithDiscount(arr) {
  return arr.map(function(game) {
    return {
      name: game.name,
      price: game.price,
      discountedPrice: game.price * 0.9
    };
  });
}

/*
Example:
Input:
[
  { name: "Breath of the wild", price: 80 },
  { name: "Super Mario Odyssey", price: 90 },
  { name: "The Legend of Zelda: A Link to the Past", price: 70 },
  { name: "The last of us 3", price: 60 },
  { name: "The Witcher 3", price: 50 },
]
Expected Output:
[
  { name: "Breath of the wild", price: 80, discountedPrice: 72 },
  { name: "Super Mario Odyssey", price: 90, discountedPrice: 81 },
  { name: "The Legend of Zelda: A Link to the Past", price: 70, discountedPrice: 63 },
  { name: "The last of us 3", price: 60, discountedPrice: 54 },
  { name: "The Witcher 3", price: 50, discountedPrice: 45 },
]
*/

// Iteration 3: Filter Books by Page Count
function getBooks(arr) {
  return arr.filter(function(book) {
    return book.pages >= 300;
  });
}

/*
Example:
Input:
[
  { name: "The Lord of the Rings", pages: 500 },
  { name: "Harry Potter and the Philosopher's Stone", pages: 300 },
  { name: "The Hobbit", pages: 400 },
  { name: "The Chronicles of Narnia", pages: 200 },
  { name: "The Little Prince", pages: 100 },
]
Expected Output:
[
  { name: "The Lord of the Rings", pages: 500 },
  { name: "Harry Potter and the Philosopher's Stone", pages: 300 },
  { name: "The Hobbit", pages: 400 },
]
*/

// Iteration 4: Total Quantity of Products
function getTotalQuantity(arr) {
  return arr.reduce(function(total, product) {
    return total + product.quantity;
  }, 0);
}

/*
Example:
Input:
[
  { name: "Samsung Smart TV", quantity: 30 },
  { name: "iPhone 12", quantity: 20 },
  { name: "Macbook Pro", quantity: 10 },
  { name: "Lenovo ThinkPad", quantity: 40 },
  { name: "Dell XPS", quantity: 50 },
]
Expected Output: 150
*/

// Iteration 5: Average Price of Electronics
function getAveragePrice(arr) {
  const electronics = arr.filter(function(product) {
    return product.category === 'electronics';
  });
  const totalPrice = electronics.reduce(function(total, product) {
    return total + product.price;
  }, 0);
  return totalPrice / electronics.length;
}

/*
Example:
Input:
[
  { name: "Samsung Smart TV", price: 500, category: "electronics" },
  { name: "iPhone 12", price: 1000, category: "electronics" },
  { name: "Macbook Pro", price: 2000, category: "electronics" },
  { name: "Lenovo ThinkPad", price: 300, category: "electronics" },
  { name: "Dell XPS", price: 400, category: "electronics" },
  { name: "The Lord of the Rings", price: 10, category: "books" },
  { name: "Harry Potter and the Philosopher's Stone", price: 20, category: "books" },
  { name: "The Hobbit", price: 30, category: "books" },
  { name: "The Chronicles of Narnia", price: 40, category: "books" },
  { name: "The Little Prince", price: 50, category: "books" },
]
Expected Output: 840
Explanation: Average price of electronics = (500 + 1000 + 2000 + 300 + 400) / 5 = 840
*/

// Iteration 6: Common Elements Between Arrays
function getCommonElements(arr1, arr2) {
  const commonElements = arr1.filter(function(element) {
    return arr2.includes(element);
  });
  const uniqueElements = [];
  for (var i = 0; i < commonElements.length; i++) {
    if (uniqueElements.indexOf(commonElements[i]) === -1) {
      uniqueElements.push(commonElements[i]);
    }
  }
  return uniqueElements.sort(function(a, b) {
    return b - a;
  });
}

/*
Example:
Input:
arr1 = [1, 2, 3, 4, 5]
arr2 = [3, 4, 5, 6, 7]
Expected Output: [5, 4, 3]
*/

// Iteration 7: Longest Consecutive Sequence
function getLongestConsecutiveSequence(arr) {
  if (arr.length === 0) return [];
  arr.sort(function(a, b) {
    return a - b;
  });
  let longestSeq = [], currentSeq = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      currentSeq.push(arr[i]);
    } else if (arr[i] !== arr[i - 1]) {
      if (currentSeq.length > longestSeq.length) {
        longestSeq = currentSeq;
      }
      currentSeq = [arr[i]];
    }
  }
  if (currentSeq.length > longestSeq.length) {
    longestSeq = currentSeq;
  }
  return longestSeq;
}

/*
Example:
Input: [1, 3, 2, 4, 5, 7, 8, 9]
Expected Output: [1, 2, 3, 4, 5]
*/