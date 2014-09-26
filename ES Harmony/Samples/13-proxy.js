var Proxy = require('harmony-proxy');

var person = {
	name: 'Lucas Medeiros',
	age: 21
};

// Setting the proxy
person = new Proxy(person, {
	get: function(target, property) {
		console.log('Property', property, 'has been requested', target);
		return target[property];	
	},
	set: function(target, property, value) {
		var oldValue = target[property];

		if (value < 18) {
			throw Error('Person cannot be younger than 18.');
		}

		target[property] = value;
		console.log('Value of', property, 'changed from', oldValue, 'to', value);
	}
});

console.log(person.name);

try {
	person.age = 12;
} catch (error) {
	console.log(error);
}