// Iteration 1: Multiply Array Elements by Two
function multiplyByTwo(arr) {
	// your code here
	const newArr = arr.map((number) => {
		return number * 2;
	});
	return newArr;
}

/*
Example:
Input: [1, 2, 3, 4, 5]
Expected Output: [2, 4, 6, 8, 10]
*/

// Iteration 2: Videogame Discount
function getVideogamesWithDiscount(arr) {
	// your code here
	const discountArr = arr.map((game) => {
		const discountPrice = game.price * 0.9;
		return { ...game, discountedPrice: discountPrice };
	});
	return discountArr;
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
	// your code here
	const filteredBooks = arr.filter((book) => {
		return book.pages >= 300;
	});
	return filteredBooks;
}

const books = [
	{ name: "The Lord of the Rings", pages: 500 },
	{ name: "Harry Potter and the Philosopher's Stone", pages: 300 },
	{ name: "The Hobbit", pages: 400 },
	{ name: "The Chronicles of Narnia", pages: 200 },
	{ name: "The Little Prince", pages: 100 },
];
/*Expected Output:
[
  { name: "The Lord of the Rings", pages: 500 },
  { name: "Harry Potter and the Philosopher's Stone", pages: 300 },
  { name: "The Hobbit", pages: 400 },
]
*/

console.log(getBooks(books));

// Iteration 4: Total Quantity of Products
function getTotalQuantity(arr) {
	// your code here
	const totalQuantity = arr.reduce((acc, cur) => {
		return acc + cur.quantity;
	}, 0);
	return totalQuantity;
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
	// your code here
	const onlyElectronics = arr.filter((device) => {
		return device.category === "electronics";
	});
	const totalPriceElectronics = onlyElectronics.reduce((acc, cur) => {
		return acc + cur.price;
	}, 0);
	return totalPriceElectronics / onlyElectronics.length;
}

/*
Example:
Input:
*/
const electronics = [
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
/*
Expected Output: 840
Explanation: Average price of electronics = (500 + 1000 + 2000 + 300 + 400) / 5 = 840
*/

console.log(getAveragePrice(electronics));

// Iteration 6: Common Elements Between Arrays
function getCommonElements(arr1, arr2) {
	// your code here
	let checkDupes = [];
	const commonElements = arr1.filter((number) => {
		return arr2.indexOf(number) !== -1;
	});
	const deDupedElements = commonElements.filter((number, index) => {
		const indexNo = commonElements.indexOf(number);
		return indexNo === index;
	});
	return deDupedElements.sort((a, b) => b - a);
}

/*
Example:
Input:*/
const arr1 = [1, 2, 3, 3, 4, 5];
const arr2 = [3, 3, 4, 5, 6, 7];
/*Expected Output: [5, 4, 3]
 */
//console.log(getCommonElements(arr1, arr2));

// Iteration 7: Longest Consecutive Sequence
function getLongestConsecutiveSequence(arr) {
	// your code here
	const orderedArr = arr.sort((a, b) => {
		return a-b;
	});
  console.log(orderedArr);
  
	const sequences = [];
	let sequenceLength = 0;
	for (let i = 0; i < orderedArr.length; i++) {
		const first = orderedArr[i];
		const second = orderedArr[i + 1];
		if (second - first === 1) {
			sequenceLength += 1;
		} else {
			sequences.push({ long: sequenceLength, lastPos: i });
			sequenceLength = 0;
		}
	}
	sequences.sort((a, b) => {
		return b.long - a.long;
	});
	sequences;
	const start = sequences[0].lastPos + 1 - (sequences[0].long + 1);
	const end = sequences[0].lastPos + 1;
	const longestSequence = arr.slice(start, end);
	return longestSequence;
}

/*
Example:*/
const consArr = [1, 3, 2, 4, 5, 7, 8, 9];

console.log(getLongestConsecutiveSequence(consArr));

/*Expected Output: [1, 2, 3, 4, 5]
 */
