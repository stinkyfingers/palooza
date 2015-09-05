class AppController {
  constructor ($scope, $rootScope) {
    'ngInject';

    $rootScope.$watch('err',function(n,o){
    	if (n !== o){
			// alert(n);
    	}
	});

	}
}

export default AppController;