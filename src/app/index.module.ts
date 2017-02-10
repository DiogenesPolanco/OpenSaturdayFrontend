/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { navbar } from '../app/components/navbar/navbar.directive';

declare var moment: moment.MomentStatic;

module opensaturday {
  'use strict';

  angular.module('opensaturday', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .directive('navbar', navbar);
}
