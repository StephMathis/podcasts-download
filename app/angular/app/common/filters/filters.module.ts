
import {bytesFilter} from './bytes.filter';

export const filtersModule = angular.module("app.common.filters", []);

filtersModule.filter('mhfilesize', bytesFilter);