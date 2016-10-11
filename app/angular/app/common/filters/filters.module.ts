
//import {bytesFilter} from './bytes.filter';

import {filesizefilter} from "./filesize.filter";

export const filtersModule = angular.module("app.common.filters", []);

filtersModule.filter('mhfilesizeag', filesizefilter);