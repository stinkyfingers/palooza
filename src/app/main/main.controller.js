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
      $scope.day = null;
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
      for (let j = 0; j < $scope.challenge.days.length; j++){
        if ($scope.challenge.days[j].people === undefined || $scope.challenge.days.people === null){
          $scope.challenge.days[j].people = [];
        }

        for (let key in person.days){
          if ($scope.challenge.days[j].name === key){
            let tempPerson = {firstName: person.firstName, lastName: person.lastName};
            $scope.challenge.days[j].people.push(tempPerson);
          }
        }
      }
      //update challenge
      MainService.updateChallenge($scope.challenge).then((resp) =>{
        $scope.challenge = resp.data;
      }, (err) =>{
        $rootScope.$broadcast('error', err);
      });
    };

    
  }

}

export default MainController;
