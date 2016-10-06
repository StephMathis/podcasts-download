

import * as angular from 'angular';
import './common'
import './legacy-app';



import {appModule} from './app/app.module';

angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name]);
});
