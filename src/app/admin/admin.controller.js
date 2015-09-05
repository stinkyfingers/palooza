class AdminController {
  constructor ($scope, $rootScope, AdminService, $location) {
    'ngInject';

    $scope.daysofweek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    $scope.new = false;
    $scope.user = {};

    if (AdminService.getUser() === null || !AdminService.getUser().admin){
      $location.url("/login");
    }

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
        $scope.challenge = false;
      },(err) =>{
        $rootScope.$broadcast('err', err);
      });
    };

    var createChallenge = (chal) =>{
      AdminService.createChallenge(chal).then((resp)=>{
        $scope.challenges.push(resp.data);
        $scope.challenge = false;
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

    $scope.remove = () =>{
      AdminService.removeChallenge($scope.challenge).then((resp)=>{
        for (let i = 0; i < $scope.challenges.length; i++){
          if (resp.data._id === $scope.challenges[i]._id){
            $scope.challenges.splice(i, 1);
          }
        }
        $scope.challenge = false;
      }, (err) =>{
        $rootScope.$broadcast('err', err);
      });
    };

    //login
    $scope.login = () =>{
      AdminService.authenticate($scope.user).then((resp) =>{
        $scope.token = resp.data.token;
        AdminService.setToken(resp.data.token);
        AdminService.setUser(resp.data.user);
        $location.url('/');
      }, (err) =>{
        $rootScope.$broadcast('err', err);
      });
    };

    $scope.logout = () =>{
      AdminService.logout();
      $location.url('/');
    };

    $scope.edit = () =>{
      $scope.new = true;
    };
    $scope.li = () =>{
      $scope.new = false;
    };
    $scope.checkPass = (create, passconfirm) => {
      create.$setValidity('passconfirm', true);
      if ($scope.user.password !== passconfirm){
        create.$setValidity('passconfirm', false);
      }
    };



  }

 
}

export default AdminController;
