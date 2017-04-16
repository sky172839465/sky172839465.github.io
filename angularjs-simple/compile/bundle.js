angular.module("app").controller("ctrl", ctrl);
ctrl.$inject = ["dataservice"];
function ctrl(a) {
  this.test = "Simple";
  this.list = a.getData();
  console.table(this.list);
}
;angular.module("app").factory("dataservice", dataservice);
function dataservice() {
  return {getData:function() {
    return [{title:"AAA", name:"aaa"}, {title:"BBB", name:"bbb"}, {title:"CCC", name:"ccc"}];
  }};
}
;angular.module("comp", []).directive("customElement", customElement);
function customElement() {
  return {template:"<div>I am customElement</div>", restrict:"E"};
}
;//# sourceMappingURL=bundle.js.map
