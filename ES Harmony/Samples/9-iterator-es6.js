System.register("9-iterator", [], function() {
  "use strict";
  var $__4 = $traceurRuntime.initGeneratorFunction(double);
  var item$__3;
  var __moduleName = "9-iterator";
  function double(list) {
    var l$__2,
        $__0,
        $__1;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $__0 = list[$traceurRuntime.toProperty(Symbol.iterator)]();
            $ctx.state = 4;
            break;
          case 4:
            $ctx.state = (!($__1 = $__0.next()).done) ? 5 : -2;
            break;
          case 5:
            l$__2 = $__1.value;
            $ctx.state = 6;
            break;
          case 6:
            $ctx.state = 2;
            return l$__2 * 2;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          default:
            return $ctx.end();
        }
    }, $__4, this);
  }
  var generator = double([1, 2, 3]);
  for (var $__0 = generator[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    item$__3 = $__1.value;
    {
      console.log(item$__3);
    }
  }
  return {};
});
System.get("9-iterator" + '');
