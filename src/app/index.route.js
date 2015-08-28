function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/admin', {
      templateUrl: 'app/admin/main.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
