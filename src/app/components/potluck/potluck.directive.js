class PotluckDirective {
  constructor () {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/potluck/potluck.html',
      scope: {
          potluck: '=pot'
      },
      controller: PotluckController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class PotluckController {
  constructor (AdminService, $scope, $location, MainService, $rootScope) {
    'ngInject';
    //signup
    $scope.signup = () =>{
      if (AdminService.getUser() === null || AdminService.getUser() === undefined){
        $location.url('/login');
        return;
      }
      $scope.day = null;
      $scope.person = AdminService.getUser();

      // //set personAdd temp var
      // for (let i = 0; i < $scope.potlucj.days.length; i++){
      //   if ($scope.personOnDay($scope.challenge.days[i], $scope.person) !== -1){
      //     $scope.challenge.days[i].personAdd = true;
      //   }
      // }
    };
    $scope.save = () => {
      if (!$scope.vm.potluck.dishes) {
        $scope.vm.potluck.dishes = [];
      }
      $scope.vm.potluck.dishes.push({user: $scope.person, dish: $scope.vm.dish});
      MainService.updatePotluck($scope.vm.potluck).then((resp) => {
        $scope.vm.potluck = resp.data;
      }, (err) => {
        $rootScope.$broadcast('err', err);
      }).finally(() => {
        $scope.person = null;
      });
    };
  }
}

export default PotluckDirective;
