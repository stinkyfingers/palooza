class AdminService {
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

  createChallenge(challenge){
    return this.$http({
      method: 'post',
      url: this.api + '/challenge',
      data: challenge
    });
  }

  updateChallenge(challenge){
    return this.$http({
      method: 'put',
      url: this.api + '/challenge',
      data: challenge
    });
  }

  removeChallenge(challenge){
    return this.$http({
      method: 'post',
      url: this.api + '/challenge/delete',
      data: challenge
    });
  }


    
}

export default AdminService;
