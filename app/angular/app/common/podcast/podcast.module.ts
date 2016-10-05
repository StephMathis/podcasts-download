/**
 * Created by amel on 24/09/16.
 */

import {PodcastStore} from "./podcast-store";
//import {restangularModule} from "../restangular/restangular.module";

export const podcastModule = angular.module('app.common.podcast', [
//    restangularModule.name
]);

podcastModule.service('podcastStore', PodcastStore);
