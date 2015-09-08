class AdminService {
  constructor ($http, GlobalService, localStorageService) {
    'ngInject';
    this.$http = $http;
    this.api = GlobalService.getApi();
    this.localStorageService = localStorageService;
  
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
      data: challenge,
      headers:{
        'Authorization':'Bearer: ' + this.getToken()
      }
    });
  }

  updateChallenge(challenge){
    return this.$http({
      method: 'put',
      url: this.api + '/challenge',
      data: challenge,
      headers:{
        'Authorization':'Bearer: ' + this.getToken()
      }
    });
  }

  removeChallenge(challenge){
    return this.$http({
      method: 'post',
      url: this.api + '/challenge/delete',
      data: challenge,
      headers:{
        'Authorization':'Bearer: ' + this.getToken()
      }
    });
  }

  authenticate(user){
    return this.$http({
      method: 'post',
      url: this.api + '/userauth',
      data: user
    });
  }

  createUser(user){
    return this.$http({
      method: 'post',
      url: this.api + '/user',
      data: user
    });
  }

  logout(){
    this.localStorageService.remove('token');
    this.localStorageService.remove('user');
  }

  setToken(token){
    this.localStorageService.set('token', token);
  }

  getToken(){
    return this.localStorageService.get('token');
  }

  setUser(user){
    this.localStorageService.set('user', user);
  }

  getUser(){
    return this.localStorageService.get('user');
  }

    
}

export default AdminService;
