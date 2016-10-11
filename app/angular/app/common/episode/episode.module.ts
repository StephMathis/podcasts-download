/**
 * Created by amel on 02/10/16.
 */
import 'angular-local-storage';
import {restangularModule} from "../restangular/restangular.module";
import {podcastslocalstorageModule} from "../podcastslocalstorage/podcastslocalstorage.module";
import {EpisodeStore} from "./episode-store";

export const episodeModule = angular.module('app.common.episode', [
    restangularModule.name , 'LocalStorageModule', podcastslocalstorageModule.name
]);

episodeModule.service('episodeStore', EpisodeStore);



