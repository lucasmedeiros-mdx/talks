System.register("8-infinite-generator", [], function() {
  "use strict";
  var $__0 = $traceurRuntime.initGeneratorFunction(infiniteGenerator);
  var __moduleName = "8-infinite-generator";
  function infiniteGenerator() {
    var i;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            i = 0;
            $ctx.state = 7;
            break;
          case 7:
            $ctx.state = (true) ? 1 : -2;
            break;
          case 1:
            $ctx.state = 2;
            return i++;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 7;
            break;
          default:
            return $ctx.end();
        }
    }, $__0, this);
  }
  var infinite = infiniteGenerator();
  console.log(infinite.next());
  console.log(infinite.next());
  console.log(infinite.next());
  return {};
});
System.get("8-infinite-generator" + '');
