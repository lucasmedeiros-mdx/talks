function listCountries({letter: countryName}) {

	var countries = [
		'Australia',
		'Argentina',
		'Brazil',
		'England',
		'Finland',
		'France',
		'United States'
	];

	console.log(`List countries starting with ${countryName}`);

	return {
		filter: countries.filter(countries => countries.startsWith(countryName)),
		countries: countries
	};
}

var { countries, filter } = listCountries({letter: 'F'});
console.log(filter);