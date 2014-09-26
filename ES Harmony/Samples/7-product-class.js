class Product {
	constructor(name, value) {
		this.name = name;
		this.value = value;
	}

	checkPrice(quantity = 1) {
		return this.value * quantity;
	}

	buy(quantity = 1) {
		let price = this.checkPrice(quantity);
		console.log(`Product: ${quantity} purchased for U$ ${price}`);
	}
}

export class Book extends Product {
	constructor(name, author, value) {
		super(name, value);
		this.author = author;
	}

	buy(quantity = 1) {
		let price = this.checkPrice(quantity);
		console.log(`${quantity} book(s) purchased for U$ ${price}: ${this.name} by ${this.author}`);
	}
}