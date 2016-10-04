/**
<<<<<<< HEAD
 * Created by amel on 02/10/16.
 */
import {EpisodeStore} from "./episode-store";
import {restangularModule} from "../restangular/restangular.module";

export const episodeModule = angular.module('app.common.episode', [
    restangularModule.name]);

episodeModule.service('episodeStore', EpisodeStore);
=======
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


export const episodeModule = angular.module('app.common.episode', []);

>>>>>>> 37143d94446aa20abe4a29c4f9dd6f22bc751758
