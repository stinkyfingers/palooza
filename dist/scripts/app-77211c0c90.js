/******/!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={exports:{},id:a,loaded:!1};return e[a].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var a,l,r,o,i,s,c,u,d,g,p,h,f=(a=n(1),a&&a.__esModule&&a||{"default":a})["default"],v=(l=n(2),l&&l.__esModule&&l||{"default":l})["default"],m=(r=n(3),r&&r.__esModule&&r||{"default":r})["default"],b=(o=n(4),o&&o.__esModule&&o||{"default":o})["default"],y=(i=n(5),i&&i.__esModule&&i||{"default":i})["default"],$=(s=n(6),s&&s.__esModule&&s||{"default":s})["default"],C=(c=n(7),c&&c.__esModule&&c||{"default":c})["default"],_=(u=n(8),u&&u.__esModule&&u||{"default":u})["default"],j=(d=n(9),d&&d.__esModule&&d||{"default":d})["default"],S=(g=n(10),g&&g.__esModule&&g||{"default":g})["default"],w=(p=n(11),p&&p.__esModule&&p||{"default":p})["default"],M=(h=n(12),h&&h.__esModule&&h||{"default":h})["default"];angular.module("palooza",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngRoute","mm.foundation"]).constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment).config(f).config(v).run(m).service("githubContributor",$).service("AdminService",j).service("MainService",S).service("webDevTec",C).service("GlobalService",_).controller("MainController",b).controller("AdminController",y).directive("acmeNavbar",function(){return new w}).directive("acmeMalarkey",function(){return new M(malarkey)})},function(e,t){"use strict";function n(e,t,n){"ngInject";e.debugEnabled(!0),n.html5Mode(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}}),n.$inject=["$logProvider","toastr","$locationProvider"];var a=n},function(e,t){"use strict";function n(e){"ngInject";e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/admin",{templateUrl:"app/admin/main.html",controller:"AdminController",controllerAs:"admin"}).otherwise({redirectTo:"/"})}Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}}),n.$inject=["$routeProvider"];var a=n},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}}),n.$inject=["$log"];var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=function(e,t,n){"ngInject";t.getChallenges().then(function(t){e.challenges=t.data},function(e){n.$broadcast("error",e)}),e.showChallenge=function(t){e.challenge=t},e.details=function(t){e.day=t},e.closeDetails=function(){e.day=null},e.signup=function(t){e.day=null,e.person={},t&&(e.person=t)},e.cancelSignup=function(){e.person=null},e.savePerson=function(a){for(var l=0;l<e.challenge.days.length;l++){(void 0===e.challenge.days[l].people||null===e.challenge.days.people)&&(e.challenge.days[l].people=[]);for(var r in a.days)if(e.challenge.days[l].name===r){var o={firstName:a.firstName,lastName:a.lastName};e.challenge.days[l].people.push(o)}}t.updateChallenge(e.challenge).then(function(t){e.challenge=t.data},function(e){n.$broadcast("error",e)})["finally"](function(){e.person=null})}};n.$inject=["$scope","MainService","$rootScope"],$traceurRuntime.createClass(n,{},{});var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=function(e,t,n){"ngInject";e.daysofweek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],n.getChallenges().then(function(t){e.challenges=t.data},function(e){t.$broadcast("err",e)}),e.editDay=function(t){e.day={},t?(t.date=new Date(t.date),e.day=t):((void 0===e.challenge.days||null===e.challenge.days)&&(e.challenge.days=[]),e.challenge.days.push(e.day))},e.editChallenge=function(t){e.challenge={},t&&(e.challenge=t)},e.cancel=function(){e.challenge=null};var a=function(e){n.updateChallenge(e).then(function(){},function(e){t.$broadcast("err",e)})},l=function(e){n.createChallenge(e).then(function(){},function(e){t.$broadcast("err",e)})};e.save=function(){return void 0!==e.challenge._id?(a(e.challenge),void(e.challenge=null)):(l(e.challenge),e.challenges.push(e.challenge),void(e.challenge=null))},e.remove=function(){n.removeChallenge(e.challenge).then(function(t){for(var n=0;n<e.challenges.length;n++)t.data._id===e.challenges[n]._id&&e.challenges.splice(n,1);e.challenge=null},function(e){t.$broadcast("error",e)})}};n.$inject=["$scope","$rootScope","AdminService"],$traceurRuntime.createClass(n,{},{});var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=function(e,t){"ngInject";this.$http=t,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"};n.$inject=["$log","$http"],$traceurRuntime.createClass(n,{getContributors:function(e){var t=this;return e||(e=30),this.$http.get(this.apiHost+"/contributors?per_page="+e).then(function(e){return e.data})["catch"](function(e){t.$log.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))})}},{});var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=function(){"ngInject";this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Angular Foundation",url:"http://pineconellc.github.io/angular-foundation/",description:"A set of native AngularJS directives based on Foundation's markup and CSS",logo:"angular-foundation.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Traceur)",url:"https://github.com/google/traceur-compiler",description:"A JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future today.",logo:"traceur.png"}]};$traceurRuntime.createClass(n,{getTec:function(){return this.data}},{});var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=function(e,t){"ngInject";this.$http=e,this.$location=t};n.$inject=["$http","$location"],$traceurRuntime.createClass(n,{getApi:function(){var e=this.$location.absUrl(),t="http://localhost:8080";return-1===e.indexOf("localhost")&&(t="https://paloozaapi.herokuapp.com"),t}},{});var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=function(e,t){"ngInject";this.$http=e,this.api=t.getApi()};n.$inject=["$http","GlobalService"],$traceurRuntime.createClass(n,{getChallenge:function(e){return this.$http({method:"get",url:this.api+"/challenge/"+e})},getChallenges:function(){return this.$http({method:"get",url:this.api+"/challenges"})},createChallenge:function(e){return this.$http({method:"post",url:this.api+"/challenge",data:e})},updateChallenge:function(e){return this.$http({method:"put",url:this.api+"/challenge",data:e})},removeChallenge:function(e){return this.$http({method:"post",url:this.api+"/challenge/delete",data:e})}},{});var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=function(e,t){"ngInject";this.$http=e,this.api=t.getApi()};n.$inject=["$http","GlobalService"],$traceurRuntime.createClass(n,{getChallenge:function(e){return this.$http({method:"get",url:this.api+"/challenge/"+e})},getChallenges:function(){return this.$http({method:"get",url:this.api+"/challenges"})},updateChallenge:function(e){return this.$http({method:"put",url:this.api+"/challenge",data:e})}},{});var a=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return l}},__esModule:{value:!0}});var n=function(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e};$traceurRuntime.createClass(n,{},{});var a=function(e){"ngInject";this.relativeDate=e(this.creationDate).fromNow()};a.$inject=["moment"],$traceurRuntime.createClass(a,{},{});var l=n},function(e,t){"use strict";Object.defineProperties(t,{"default":{get:function(){return l}},__esModule:{value:!0}});var n=function(e){"ngInject";function t(t,n,a,l){var r,o=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){o.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(l.contributors,function(e){o.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n};n.$inject=["malarkey"],$traceurRuntime.createClass(n,{},{});var a=function(e,t){"ngInject";this.$log=e,this.contributors=[],this.activate(t)};a.$inject=["$log","githubContributor"],$traceurRuntime.createClass(a,{activate:function(e){var t=this;return this.getContributors(e).then(function(){t.$log.info("Activated Contributors View")})},getContributors:function(e){var t=this;return e.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}},{});var l=n}]),angular.module("palooza").run(["$templateCache",function(e){e.put("app/admin/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="row" ng-if="!challenge"><div class="large-12 large-text-center columns"><div class="panel"><h2>Food Challenges</h2><button ng-click="editChallenge()">New</button><p ng-repeat="c in challenges"><a ng-click="editChallenge(c)">{{c.name}}</a></p></div></div></div><div class="row" ng-if="challenge.name || challenge.days"><div class="large-12 large-text-center columns"><div class="panel"><h1>{{challenge.name}}</h1><p ng-repeat="day in challenge.days | orderBy:\'date\'">{{day.name}} <button ng-if="day.name" ng-click="editDay(day)">Edit</button> {{day.date | date}}</p></div></div></div><div ng-if="challenge"><button ng-click="editDay()">Add Day</button><div class="row"><div class="large-12 columns"><label>Name <input type="text" ng-model="challenge.name"></label></div></div><div class="row" ng-if="day"><div class="large-6 columns"><label>Day<select ng-model="day.name" ng-options="d for d in daysofweek"><option value="">--Select--</option></select></label></div><div class="large-6 columns"><label>Date <input type="date" ng-model="day.date"></label></div></div><div class="row" ng-if="day"><div class="large-6 columns"><label>Restaurant Name <input type="text" ng-model="day.restaurant.name"></label></div><div class="large-6 columns"><label>Restaurant Address <input type="text" ng-model="day.restaurant.address"></label></div></div><div><button ng-click="save()" class="button success">Save</button> <button ng-click="remove()" class="button alert">Delete</button> <button ng-click="cancel()" class="button secondary">Cancel</button></div></div></div>'),e.put("app/main/main.html",'<div class="container"><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h2>Food Challenges</h2><p ng-repeat="challenge in challenges"><a ng-click="showChallenge(challenge)">{{challenge.name}}</a></p></div></div></div><div class="row" ng-if="challenge"><div class="large-6 columns"><h2>{{challenge.name}}</h2><button ng-click="signup()" class="button success">Sign Up</button><table><thead><tr><th>Date</th><th>Day</th><th>Restaurant</th><th>Details</th></tr></thead><tbody><tr ng-repeat="day in challenge.days"><td>{{day.date | date}}</td><td>{{day.name}}</td><td>{{day.restaurant.name}}</td><td><a ng-click="details(day)">Details</a></td></tr></tbody></table><alert ng-if="day" ng-model="day" type="alert.type" close="closeDetails($index)"><h3>Restaurant: {{day.restaurant.name}}</h3><h5>Address: {{day.restaurant.address}}</h5><ul ng-if="day.people.length"><lh>Attendees:</lh><li ng-repeat="person in day.people">{{person.firstName}} {{person.lastName}}</li></ul></alert></div><div class="signup large-6 columns" ng-if="person"><label for="firstName">First Name: <input type="text" ng-model="person.firstName"></label> <label for="lastName">Last Name: <input type="text" ng-model="person.lastName"></label><h4>Days:</h4><div class="switch" ng-repeat="(i, day) in challenge.days">{{day.name}} - {{day.restaurant.name}} <input id="{{i}}" type="checkbox" checked="" name="testGroup" ng-model="person.days[day.name]"> <label for="{{i}}"></label></div><button class="button success" ng-click="savePerson(person)">Save</button> <button class="button secondary" ng-click="cancelSignup()">Cancel</button></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="top-bar row"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp & Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><p class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</p></section></nav>')}]);