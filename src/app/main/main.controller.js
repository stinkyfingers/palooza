class MainController {
  constructor ($scope, MainService, $rootScope, AdminService, $location) {
    'ngInject';


    MainService.getChallenges().then((resp) =>{
      $scope.challenges = resp.data;
    }, (err) =>{
      $rootScope.$broadcast('error', err);
    });

    $scope.person = AdminService.getUser();


    $scope.showChallenge = (c) =>{
      $scope.challenge = c;
    };

    //details
    $scope.details = (day) =>{
      $scope.day = day;
    };

    $scope.closeDetails = () =>{
      $scope.day = null;
    };

    //signup
    $scope.signup = () =>{
      if (AdminService.getUser() === null || AdminService.getUser() === undefined){
        $location.url('/login');
      }
      $scope.day = null;
      $scope.person = AdminService.getUser();
    };

    $scope.cancelSignup = () =>{
      $scope.person = null;
    };

    $scope.save = () =>{
      for (let i = 0; i < $scope.challenge.days.length; i++){
        //add person to this day
        if($scope.challenge.days[i].personAdd){
          if ($scope.personOnDay($scope.challenge.days[i], $scope.person) === -1){
            $scope.challenge.days[i].people.push($scope.person);
          }
        }else{
          //remove person from day
          let index = $scope.personOnDay($scope.challenge.days[i], $scope.person);
          if (index !== -1){
            $scope.challenge.days[i].people.splice(index, 1);
          }
        }
      }
      //update challenge
      MainService.updateChallenge($scope.challenge).then((resp) =>{
        $scope.challenge = resp.data;
      }, (err) =>{
        $rootScope.$broadcast('error', err);
      }).finally(()=>{
        $scope.person = null;
      });

    };

    //object-specific indexOf function
    $scope.personOnDay = (day, person) =>{
      for (let i = 0; i < day.people.length; i++){
        if (person._id === day.people[i]._id){
          return i;
        }
      }
      return -1;
    };
    
  }

}

export default MainController;
