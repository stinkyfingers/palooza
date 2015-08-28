class AdminController {
  constructor ($scope, $rootScope, AdminService) {
    'ngInject';

    $scope.daysofweek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    AdminService.getChallenge('55da290d8bd2ff45063cf8b7').then((resp) =>{
      $scope.challenge = resp.data;
    }, (err) =>{
      $rootScope.$broadcast('err', err);
    });

    $scope.editDay = (day) =>{
      $scope.day = {};
      if (day){
        $scope.day = day;        
      }
    }

  }

 
}

export default AdminController;
