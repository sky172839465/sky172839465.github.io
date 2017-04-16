angular
    .module('app')
    .factory('dataservice', dataservice);

function dataservice() {
    var service = {
      getData: getData
    };
    
    return service;
    
    function getData() {
      var data = [
        {
          title: 'AAA', 
          name: 'aaa'
        },{
          title: 'BBB', 
          name: 'bbb'
        },{
          title: 'CCC', 
          name: 'ccc'
        },
      ];
      
      return data;
    }
}
