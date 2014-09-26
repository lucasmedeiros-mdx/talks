function* infiniteGenerator() {
	let i = 0;
	while (true) {
		yield i++;
	}
}

let infinite = infiniteGenerator();
console.log(infinite.next());  // { value: 0, done: false }
console.log(infinite.next());  // { value: 1, done: false }
console.log(infinite.next());  // { value: 2, done: false }

