System.register("5-defaultparameters", [], function() {
  "use strict";
  var __moduleName = "5-defaultparameters";
  var printMessage = (function(message) {
    var type = arguments[1] !== (void 0) ? arguments[1] : 'error';
    console.log((type.toUpperCase() + ": " + message));
  });
  printMessage('Invalid Operation');
  return {};
});
System.get("5-defaultparameters" + '');
