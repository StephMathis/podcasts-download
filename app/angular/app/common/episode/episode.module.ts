/**
 * Created by amel on 02/10/16.
 */
import 'angular-local-storage';
import {restangularModule} from "../restangular/restangular.module";
import {podcastslocalstorageModule} from "../podcastslocalstorage/podcastslocalstorage.module";
import {EpisodeStore} from "./episode-store";
import {filtersModule} from "../filters/filters.module";


export const episodeModule = angular.module('app.common.episode', [
    restangularModule.name , 'LocalStorageModule', podcastslocalstorageModule.name, //, podcastslocalstorageModule.name
    filtersModule.name
]);

episodeModule.service('episodeStore', EpisodeStore);



