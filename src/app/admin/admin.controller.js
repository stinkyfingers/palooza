class AdminController {
  constructor ($scope, $rootScope, AdminService) {
    'ngInject';

    $scope.daysofweek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    AdminService.getChallenges().then((resp) =>{
      $scope.challenges = resp.data;
    }, (err) =>{
      $rootScope.$broadcast('err', err);
    });

    $scope.editDay = (day) =>{
      $scope.day = {};
      if (day){
        day.date = new Date(day.date);
        $scope.day = day;        
      }else{
        if ($scope.challenge.days === undefined || $scope.challenge.days === null){
          $scope.challenge.days = [];
        }
        $scope.challenge.days.push($scope.day);
      }
    };

    $scope.editChallenge = (challenge) =>{
      $scope.challenge = {};
      if (challenge){
        $scope.challenge = challenge;
      }
    };

    $scope.cancel = () =>{
      $scope.challenge = null;
    };

    //CRUD
    var updateChallenge = (chal) =>{
      AdminService.updateChallenge(chal).then(()=>{
      },(err) =>{
      $rootScope.$broadcast('err', err);
      });
    };

    var createChallenge = (chal) =>{
      AdminService.createChallenge(chal).then(()=>{
      },(err) =>{
      $rootScope.$broadcast('err', err);
      });
    };

    $scope.save = () =>{
      if ($scope.challenge._id !== undefined){
        updateChallenge($scope.challenge);
        $scope.challenge = null;
        return;
      }
      createChallenge($scope.challenge);
      $scope.challenges.push($scope.challenge);
      $scope.challenge = null;
      return;
    };

    $scope.remove = () =>{
      AdminService.removeChallenge($scope.challenge).then((resp)=>{
        for (let i = 0; i < $scope.challenges.length; i++){
          if (resp.data._id === $scope.challenges[i]._id){
            $scope.challenges.splice(i, 1);
          }
        }
        $scope.challenge = null;
      }, (err) =>{
        $rootScope.$broadcast('error', err);
      });
    };



  }

 
}

export default AdminController;
