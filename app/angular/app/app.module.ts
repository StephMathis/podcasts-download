/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {userListModule} from './user-list/user-list.module';
import {podcastListModule} from "./podcast-list/podcast-list.module";
import {episodeListModule} from "./episode-list/episode-list.module";


export const appModule = angular.module('app', [
    userListModule.name,
    podcastListModule.name,
    episodeListModule.name
]);

