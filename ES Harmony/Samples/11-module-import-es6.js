System.register("10-module-main", [], function() {
  "use strict";
  var __moduleName = "10-module-main";
  var value = 5;
  return {get value() {
      return value;
    }};
});
System.register("11-module-import", [], function() {
  "use strict";
  var __moduleName = "11-module-import";
  var value = System.get("10-module-main").value;
  console.log(value);
  return {};
});
System.get("11-module-import" + '');
