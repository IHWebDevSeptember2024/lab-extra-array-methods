# JavaScript Array Manipulation Practice Lab

Welcome to the JavaScript Array Manipulation Practice Lab! This lab will help you gain hands-on experience with JavaScript array methods, including `map()`, `filter()`, `reduce()`, and more. You'll learn to manipulate arrays efficiently while completing different exercises that each focus on distinct array operations.

## Learning Objectives

Upon completing this lab, you will be able to:

- Use the `map()` method to transform elements in an array.
- Use the `filter()` method to select specific elements from an array.
- Use the `reduce()` method to aggregate values in an array.
- Chain array methods to solve complex problems.
- Apply advanced logical manipulation techniques to solve challenges involving sets and sequences.

## Lab Overview

This lab contains **seven exercises**, each designed to solidify your understanding of array manipulation techniques. The exercises involve different scenarios, such as transforming elements, calculating totals, filtering data, and working with sequences.

You will use the provided prompts to complete each function in the `src/index.js` file. Make sure you do **not modify the original input arrays**. Your goal is to practice pure functions and avoid side effects.

## Setup Instructions

1. **Fork and Clone the Repository**: To begin, fork this repository and clone it to your local machine.
2. **Set Up Your Environment**: Ensure your local environment is properly configured to run JavaScript code (e.g., Node.js).

## Submission Steps

Upon completing all exercises, use the following commands to commit your work and create a Pull Request:

```bash
# Stage all changes
git add .

# Commit changes with a meaningful message
git commit -m "Solved all exercises"

# Push changes to your remote repository
git push origin main
```

After pushing, create a **Pull Request** to submit your solution.

## Running the Code

To test your solutions, run the following command:

```bash
node src/index.js
```

Make sure to test each function thoroughly to ensure correctness. You can also open the SpecRunner.html file in your browser to run the automated tests and check the console for any errors.

## Exercises

### Iteration 1: Multiply Array Elements by Two

Create a function named `multiplyByTwo()` that takes an array of numbers and returns a new array where each number is multiplied by 2. Use the `map()` method.

<details>
<summary>Solution</summary>

```js
function multiplyByTwo(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = multiplyByTwo(numbers); // [2, 4, 6, 8, 10]
```

</details>

### Iteration 2: Videogame Discount

Create a function named `getVideogamesWithDiscount()` that takes an array of videogames and returns a new array where each game includes a `discountedPrice` property (with a 10% discount). Use `map()`.

<details>
<summary>Solution</summary>

```js
function getVideogamesWithDiscount(videogames) {
  return videogames.map(function (game) {
    return {
      name: game.name,
      price: game.price,
      discountedPrice: game.price * 0.9,
    };
  });
}

const videogames = [
  { name: "Game A", price: 50 },
  { name: "Game B", price: 60 },
];
const gamesWithDiscount = getVideogamesWithDiscount(videogames);
```

</details>

### Iteration 3: Filter Books by Page Count

Create a function named `getBooks()` that filters out books with fewer than 300 pages. Use the `filter()` method.

<details>
<summary>Solution</summary>

```js
function getBooks(books) {
  return books.filter(function (book) {
    return book.pages >= 300;
  });
}

const books = [
  { title: "Book A", pages: 150 },
  { title: "Book B", pages: 320 },
];
const bigBooks = getBooks(books); // Returns books with pages >= 300
```

</details>

### Iteration 4: Total Quantity of Products

Create a function named `getTotalQuantity()` that returns the total quantity of products. Use the `reduce()` method.

<details>
<summary>Solution</summary>

```js
function getTotalQuantity(products) {
  return products.reduce(function (total, product) {
    return total + product.quantity;
  }, 0);
}

const products = [
  { name: "Product A", quantity: 3 },
  { name: "Product B", quantity: 7 },
];
const totalQuantity = getTotalQuantity(products); // Sum of all product quantities
```

</details>

### Iteration 5: Average Price of Electronics

Create a function named `getAveragePrice()` that calculates the average price of all products in the "electronics" category. Use `filter()` and `reduce()` together.

<details>
<summary>Solution</summary>

```js
function getAveragePrice(products) {
  const electronics = products.filter(function (product) {
    return product.category === "electronics";
  });
  const totalPrice = electronics.reduce(function (total, product) {
    return total + product.price;
  }, 0);
  return totalPrice / electronics.length;
}

const products = [
  { name: "TV", category: "electronics", price: 400 },
  { name: "Laptop", category: "electronics", price: 1000 },
  { name: "Book", category: "books", price: 20 },
];
const averagePrice = getAveragePrice(products); // Average price of electronics
```

</details>

### Iteration 6: Common Elements Between Arrays

Create a function named `getCommonElements()` that takes two arrays and returns a new array containing only the common elements, sorted in descending order, without duplicates.

<details>
<summary>Solution</summary>

```js
function getCommonElements(arr1, arr2) {
  const commonElements = arr1.filter(function (element) {
    return arr2.includes(element);
  });
  const uniqueElements = [];
  for (var i = 0; i < commonElements.length; i++) {
    if (uniqueElements.indexOf(commonElements[i]) === -1) {
      uniqueElements.push(commonElements[i]);
    }
  }
  return uniqueElements.sort(function (a, b) {
    return b - a;
  });
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = getCommonElements(arr1, arr2); // Common elements, no duplicates, sorted
```

</details>

### Iteration 7: Longest Consecutive Sequence

Create a function named `getLongestConsecutiveSequence()` that takes an array and returns the longest sequence of consecutive integers, sorted in ascending order.

<details>
<summary>Solution</summary>

```js
function getLongestConsecutiveSequence(arr) {
  if (arr.length === 0) return [];
  arr.sort(function (a, b) {
    return a - b;
  });
  let longestSeq = [],
    currentSeq = [arr[0]];
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

const arr = [1, 3, 2, 4, 5, 7, 8, 9];
const longestSequence = getLongestConsecutiveSequence(arr); // Longest sequence sorted in ascending order
```

</details>
