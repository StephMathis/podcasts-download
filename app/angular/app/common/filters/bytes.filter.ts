import {IFilter} from './ifilter';


export const bytesFilter : IFilter = ($filter : angular.IFilterService) => {
    'ngInject';

    return (bytes , precision) => {
			if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
			if (typeof precision === 'undefined') precision = 1;
			var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
				number = Math.trunc(Math.log2(bytes) / Math.log2(1024));
			return $filter('number')(bytes / 1024**Math.trunc(number), precision) + ' ' + units[number];
			//(bytes / 1024**Math.trunc(number)).toFixed(precision) +  ' ' + units[number];
    }
};