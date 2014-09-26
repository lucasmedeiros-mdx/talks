System.register("4-destructuring", [], function() {
  "use strict";
  var __moduleName = "4-destructuring";
  function listCountries($__0) {
    var countryName = $__0.letter;
    var countries = ['Australia', 'Argentina', 'Brazil', 'England', 'Finland', 'France', 'United States'];
    console.log(("List countries starting with " + countryName));
    return {
      filter: countries.filter((function(countries) {
        return countries.startsWith(countryName);
      })),
      countries: countries
    };
  }
  var $__0 = listCountries({letter: 'F'}),
      countries = $__0.countries,
      filter = $__0.filter;
  console.log(filter);
  return {};
});
System.get("4-destructuring" + '');
