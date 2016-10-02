/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {userListModule} from './user-list/user-list.module';
import {episodeListModule} from './podcast-list/podcast-view/episode-list/episode-list.module';

export const appModule = angular.module('app', [
    userListModule.name, episodeListModule.name
]);
