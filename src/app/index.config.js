function config ($logProvider, toastr, $locationProvider, localStorageServiceProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $locationProvider.html5Mode(true);

  localStorageServiceProvider.setPrefix('palooza');

  // Set options third-party lib
  toastr.options.timeOut = 3000;
  toastr.options.positionClass = 'toast-top-right';
  toastr.options.preventDuplicates = true;
  toastr.options.progressBar = true;
}

export default config;
