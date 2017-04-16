angular
    .module('app')
    .controller('ctrl', ctrl);
    
ctrl.$inject = ['dataservice'];

function ctrl(dataservice) {
    var vm = this;
    vm.test = 'Simple';
    var result = dataservice.getData();
	vm.list = result;
	console.table(result);
	
}
