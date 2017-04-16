angular
    .module('comp', [])
    .directive('customElement', customElement);

function customElement(){
    var directive = {
        template: '<div>I am customElement</div>',
        restrict: 'E'
    };
    return directive;
}