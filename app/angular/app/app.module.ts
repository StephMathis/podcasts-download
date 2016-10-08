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
    episodeListModule.name,
    'ui.router'
]);

appModule.config($stateProvider => {
    var podcastsState = {
        name: 'podcasts',
        url: '/podcasts',
        template: '<mh-podcast-list></mh-podcast-list>'
    }

    var episodesState = {
        name: 'episodes',
        url: '/episodes',
        template: '<mh-episode-list></mh-episode-list>'
    }

    $stateProvider.state(podcastsState);
    $stateProvider.state(episodesState);
});

