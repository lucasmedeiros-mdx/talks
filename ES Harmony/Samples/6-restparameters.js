var squares = (...numbers) => numbers.map(n => n * n);

console.log(squares(2)); 		// [ 4 ]
console.log(squares(3, 5)); 	// [ 9, 25 ]
console.log(...squares(4, 5)); 	// 16 25