class MainService {
  constructor ($http, GlobalService, AdminService) {
    'ngInject';
    this.$http = $http;
    this.api = GlobalService.getApi();
    this.token = AdminService.getToken();
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
      data: challenge,
      headers:{
        'Authorization':'Bearer: '+this.token
      }
    });
  }

  


    
}

export default MainService;
