class MainService {
  constructor ($http, GlobalService) {
    'ngInject';
    this.$http = $http;
    this.api = GlobalService.getApi();
  
  }

  getChallenge(id){
    return this.$http({
      method: 'get',
      url: this.api + '/challenge/'+id
    });
  }

  getChallenges(){
    return this.$http({
      method: 'get',
      url: this.api + '/challenges'
    });
  }
  

  updateChallenge(challenge){
    return this.$http({
      method: 'put',
      url: this.api + '/challenge',
      data: challenge
    });
  }

  


    
}

export default MainService;
