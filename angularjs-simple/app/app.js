angular
    .module('app')
    .controller('ctrl', ctrl);
    
ctrl.$inject = ['dataservice'];

function ctrl(dataservice) {
    var vm = this;
    vm.test = 'Simple';
    vm.list = dataservice.getData();
	console.table(vm.list);
}
