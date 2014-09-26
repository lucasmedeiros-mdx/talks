System.register("7-product-class", [], function() {
  "use strict";
  var __moduleName = "7-product-class";
  var Product = function Product(name, value) {
    this.name = name;
    this.value = value;
  };
  ($traceurRuntime.createClass)(Product, {
    checkPrice: function() {
      var quantity = arguments[0] !== (void 0) ? arguments[0] : 1;
      return this.value * quantity;
    },
    buy: function() {
      var quantity = arguments[0] !== (void 0) ? arguments[0] : 1;
      var price = this.checkPrice(quantity);
      console.log(("Product: " + quantity + " purchased for U$ " + price));
    }
  }, {});
  var Book = function Book(name, author, value) {
    $traceurRuntime.superCall(this, $Book.prototype, "constructor", [name, value]);
    this.author = author;
  };
  var $Book = Book;
  ($traceurRuntime.createClass)(Book, {buy: function() {
      var quantity = arguments[0] !== (void 0) ? arguments[0] : 1;
      var price = this.checkPrice(quantity);
      console.log((quantity + " book(s) purchased for U$ " + price + ": " + this.name + " by " + this.author));
    }}, {}, Product);
  var product = new Book('Speaking Javascript', 'Axel Rauschmayer', 39.28);
  product.buy(2);
  return {};
});
System.get("7-product-class" + '');
