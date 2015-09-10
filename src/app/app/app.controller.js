class AppController {
  constructor ($scope, $rootScope) {
    'ngInject';
    $scope.err = null;

    $rootScope.$on('err',function(event, args){
		let err = {
			code: args.data.code,
			message: args.data.message
		};
		$scope.err = err;
	});

	}
}

export default AppController;