/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import AppController from './app/app.controller';
import AdminController from './admin/admin.controller';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import GlobalService from '../app/services/global.service';
import AdminService from '../app/services/admin.service';
import MainService from '../app/services/main.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';
import PotluckDirective from '../app/components/potluck/potluck.directive';

angular.module('palooza', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'mm.foundation','LocalStorageModule'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('AdminService', AdminService)
  .service('MainService', MainService)
  .service('webDevTec', WebDevTecService)
  .service('GlobalService', GlobalService)
  .controller('MainController', MainController)
  .controller('AdminController', AdminController)
  .controller('AppController', AppController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey))
  .directive('potluck', () => new PotluckDirective());
