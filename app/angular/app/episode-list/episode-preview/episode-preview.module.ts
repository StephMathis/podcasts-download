
/**
 * Created by amel on 02/10/16.
 */
/*
export const filesizefilter = ($filter) => {
    return (size) => {
        if (isNaN(size))
            size = 0;

        if (size < 1024)
            return size + ' Bytes';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' Kb';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' Mb';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' Gb';

        size /= 1024;

        return size.toFixed(2) + ' Tb';
    };
};
*/

import {episodeModule} from "../../common/episode/episode.module";
import {EpisodePreviewComponent} from "./episode-preview.component";
//import {filtersModule} from '../../common/filters/filters.module';

export const episodePreviewModule = angular.module('app.episodeList.episodePreview', [
    episodeModule.name,
    //filtersModule.name
]);

episodePreviewModule.component('mhEpisodePreview', EpisodePreviewComponent.config);

/*
export function LabelCase() {
    return (input : string) => {
        return input[0].toUpperCase() + input[0].toUpperCase() + input.slice(1); 
    }
}

episodePreviewModule.filter("labelCase", LabelCase());
*/

/*
export class CustomDateFilter {
    public static Factory() {
        var factoryFunction = ($filter: ng.IFilterService) => {
            var angularDateFilter = $filter('date');
            return (theDate: string) => {
                return angularDateFilter(theDate, "yyyy MM dd - hh:mm a");
            };
        };

        factoryFunction.$inject = ['$filter'];

        return factoryFunction;
    }
}
episodePreviewModule.filter('mhFilesize',  CustomDateFilter.Factory);
*/
/*
module Filters {
    export class LabelCase implements ng.IFilterService {
        static $inject = ['$filter'];

        public static factory(): Function {
           return (input: string) => {
                input = input.replace(/(A-Z)/g, '$1');
                return input[0].toUpperCase() + input.slice(1);
            }
        }

        public filter(input : string) : Function {
            return (input: string) => {
                input = input.replace(/(A-Z)/g, '$1');
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    }
}

episodePreviewModule.filter("labelCase", () => Filters.LabelCase.factory);
*/

