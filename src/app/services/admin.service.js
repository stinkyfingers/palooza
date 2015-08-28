class AdminService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
  
  }

  getChallenge(id){
      return this.$http({
        method: 'get',
        url: 'http://localhost:3001/challenge/'+id
      });
    }

    
}

export default AdminService;
