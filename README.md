# LAB | Array Manipulation Practice

In this lab, you will practice using a variety of JavaScript array methods to manipulate data effectively.

Upon completing this exercise, you will be able to:

- Use the `map()` method to transform elements in an array.
- Use the `filter()` method to select specific elements from an array.
- Use the `reduce()` method to aggregate values in an array.
- Chain array methods to solve more complex problems.
- Apply advanced logical manipulation techniques to solve challenges involving sets and sequences.

## Introduction

This lab contains seven distinct exercises to help you practice manipulating arrays in JavaScript using various methods. Each exercise requires a different approach and provides an opportunity to solidify your understanding of array functions like `map()`, `filter()`, `reduce()`, and more.

Use the provided prompts to complete each function, ensuring that you do not modify the original input arrays.

## Requirements

- Fork and clone this repository to your local machine.
- Make sure your local environment is properly set up to run JavaScript code.

## Submission

- Upon completing the lab, use the following commands:

  ```bash
  git add .
  git commit -m "Solved all exercises"
  git push origin main
  ```

* Create a Pull Request.

## Instructions

You will work on the provided functions in the `src/index.js` file. For each exercise, write a function that meets the requirements detailed in the comments.

Each of the seven exercises involves array manipulations, and you will use different JavaScript methods like `map()`, `filter()`, `reduce()`, etc., to complete them.

Below is a description of each iteration:

### Iteration 1: Multiply Array Elements by Two

Create a function named `multiplyByTwo()` that takes an array of numbers as input and returns a new array containing each number multiplied by 2. Use the `map()` method.

### Iteration 2: Videogame Discount

Create a function named `getVideogamesWithDiscount()` that takes an array of videogames and returns a new array where each game includes a 10% discount. Use the `map()` method.

### Iteration 3: Filter Books by Page Count

Create a function named `getBooks()` that filters out books with fewer than 300 pages. Use the `filter()` method.

### Iteration 4: Total Quantity of Products

Create a function named `getTotalQuantity()` that takes an array of products and returns the total quantity. Use the `reduce()` method.

### Iteration 5: Average Price of Electronics

Create a function named `getAveragePrice()` that calculates the average price of all products in the `electronics` category. Use `filter()` and `reduce()` together.

### Iteration 6: Common Elements Between Arrays

Create a function named `getCommonElements()` that takes two arrays and returns a new array containing only the common elements, sorted in descending order. Ensure no duplicates exist.

### Iteration 7: Longest Consecutive Sequence

Create a function named `getLongestConsecutiveSequence()` that takes an array and returns the longest sequence of consecutive integers, sorted in ascending order.