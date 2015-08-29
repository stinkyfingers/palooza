class GlobalService {
	constructor ($http, $location) {
    'ngInject';
    this.$http = $http;
    this.$location = $location;

  }

  getApi() {
  	var abs = this.$location.absUrl();
  	var url = 'http://localhost:8080';
  	if (abs.indexOf('localhost') === -1){
  		url = 'http://paloozaapi.herokuapp.com';
  	}
  	return url;
  }

  


    
}

export default GlobalService;
