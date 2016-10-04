/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {userModule} from './user/user.module';
import {podcastModule} from "./podcast/podcast.module";

export const commonModule = angular.module('app.common', [
    userModule.name,
    podcastModule.name
]);
