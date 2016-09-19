/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {userListModule} from './user-list/user-list.module';
import {trackListModule} from './podcast-list/podcast-view/track-list/track-list.module';

export const appModule = angular.module('app', [
    userListModule.name, trackListModule.name
]);
