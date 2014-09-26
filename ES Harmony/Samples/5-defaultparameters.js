var printMessage = (message, type = 'error') => {
	console.log(`${type.toUpperCase()}: ${message}`);
}

printMessage('Invalid Operation');