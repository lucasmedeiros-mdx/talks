System.register("3-templatestrings", [], function() {
  "use strict";
  var __moduleName = "3-templatestrings";
  console.log("Multiline \n\tString\n");
  var product = {
    type: 'book',
    name: 'Speaking Javascript',
    author: 'Axel Rauschmayer'
  };
  console.log((product.type.toUpperCase() + ": " + product.name + " by " + product.author));
  return {};
});
System.get("3-templatestrings" + '');
