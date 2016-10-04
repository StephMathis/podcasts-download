/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {userModule} from './user/user.module';
<<<<<<< HEAD
import {podcastModule} from "./podcast/podcast.module";

export const commonModule = angular.module('app.common', [
    userModule.name,
    podcastModule.name
=======

export const commonModule = angular.module('app.common', [
    userModule.name
>>>>>>> 37143d94446aa20abe4a29c4f9dd6f22bc751758
]);
