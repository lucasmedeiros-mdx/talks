System.register("1-square", [], function() {
  "use strict";
  var __moduleName = "1-square";
  var square = (function(n) {
    return n * n;
  });
  var squares = (function(numbers) {
    return numbers.map(square);
  });
  console.log(squares([1, 3, 5]));
  return {};
});
System.get("1-square" + '');
