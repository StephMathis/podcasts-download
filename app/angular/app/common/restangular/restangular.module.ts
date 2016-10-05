/**
 * Created by amel on 03/10/16.
 */

import {RestangularResources} from './resources/restangular.resources';
import {RestangularApp} from './restangular.component';



export const restangularModule = angular.module('app.common.restangular', [
    'restangular'
]);



restangularModule.provider('RestangularApp', RestangularApp);
restangularModule.service('restangularResources', RestangularResources);