angular.module("app").controller("ctrl", ctrl);
ctrl.$inject = ["dataservice"];
function ctrl(dataservice) {
  var vm = this;
  vm.test = "Simple";
  var result = dataservice.getData();
  vm.list = result;
  console.table(result);
}
;angular.module("app").factory("dataservice", dataservice);
function dataservice() {
  var service = {getData:getData};
  return service;
  function getData() {
    var data = [{title:"AAA", name:"aaa"}, {title:"BBB", name:"bbb"}, {title:"CCC", name:"ccc"}];
    return data;
  }
}
;angular.module("comp", []).directive("customElement", customElement);
function customElement() {
  var directive = {template:"<div>I am customElement</div>", restrict:"E"};
  return directive;
}
;//# sourceMappingURL=bundle.js.map
