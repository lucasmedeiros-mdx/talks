/* Destructuring Assignments
	Listar os países começando com a letra enviado por parâmetro
		- Multiple-value returns 
		- Parameter destructing
*/
function listCountries(data) {

	var countries = [
		'Australia',
		'Argentina',
		'Brazil',
		'England',
		'Finland',
		'France',
		'United States'
	];

	console.log(`List countries starting with ${data.letter}`);
}