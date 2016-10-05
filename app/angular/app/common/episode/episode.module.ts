/**
 * Created by amel on 02/10/16.
 */
import {EpisodeStore} from "./episode-store";
import {restangularModule} from "../restangular/restangular.module";

export const episodeModule = angular.module('app.common.episode', [
    restangularModule.name]);

episodeModule.service('episodeStore', EpisodeStore);


