class MainController {
  constructor ($scope, MainService, $rootScope) {
    'ngInject';


    MainService.getChallenges().then((resp) =>{
      $scope.challenges = resp.data;
    }, (err) =>{
      $rootScope.$broadcast('error', err);
    });

    $scope.showChallenge = (c) =>{
      $scope.challenge = c;
    };

    //details
    $scope.details = (day) =>{
      $scope.day = day;
    };

    $scope.closeDetails = () =>{
      $scope.detailAlert = null;
    };

    //signup
    $scope.signup = (person) =>{
      $scope.day = null;
      $scope.person = {};
      if (person){
        $scope.person = person;
      }
    };

    $scope.cancelSignup = () =>{
      $scope.person = null;
    };

    $scope.savePerson = (person) =>{
      // console.log(person);
    };

    
  }

}

export default MainController;
