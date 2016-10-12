
//import {bytesFilter} from './bytes.filter';

import {filesizefilter} from "./filesize.filter";
import {timefilter} from "./time.filter";

export const filtersModule = angular.module("app.common.filters", []);

filtersModule.filter('mhfilesize', filesizefilter);
filtersModule.filter('mhseconds', timefilter);
