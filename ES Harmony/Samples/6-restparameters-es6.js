System.register("6-restparameters", [], function() {
  "use strict";
  var $__1;
  var __moduleName = "6-restparameters";
  var squares = (function() {
    for (var numbers = [],
        $__0 = 0; $__0 < arguments.length; $__0++)
      $traceurRuntime.setProperty(numbers, $__0, arguments[$traceurRuntime.toProperty($__0)]);
    return numbers.map((function(n) {
      return n * n;
    }));
  });
  console.log(squares(2));
  console.log(squares(3, 5));
  ($__1 = console).log.apply($__1, $traceurRuntime.spread(squares(4, 5)));
  return {};
});
System.get("6-restparameters" + '');
