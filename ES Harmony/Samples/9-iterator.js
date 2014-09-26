function* double(list) {
	for (let l of list) {
		yield l*2;
	}
}

let generator = double([1, 2, 3]);

for (let item of generator) {
	console.log(item); //  2  4  6
}