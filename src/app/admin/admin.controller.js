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
        day.date = new Date(day.date);
        $scope.day = day;        
      }else{
        $scope.challenge.days.push($scope.day);
      }
    };

    //CRUD
    var updateChallenge = (chal) =>{
      AdminService.updateChallenge(chal).then((resp)=>{
        $scope.challenge = resp.data;
      },(err) =>{
      $rootScope.$broadcast('err', err);
      });
    };

    var createChallenge = (chal) =>{
      AdminService.createChallenge(chal).then((resp)=>{
        $scope.challenge = resp.data;
      },(err) =>{
      $rootScope.$broadcast('err', err);
      });
    };

    $scope.save = () =>{
      if ($scope.challenge._id !== undefined){
        updateChallenge($scope.challenge);
        return;
      }
      createChallenge($scope.challenge);
      return;
    };



  }

 
}

export default AdminController;
