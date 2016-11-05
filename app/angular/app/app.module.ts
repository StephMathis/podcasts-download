/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {channelListModule} from "./channel-list/channel-list.module";
import {podcastListModule} from "./podcast-list/podcast-list.module";
import {episodeListModule} from "./episode-list/episode-list.module";


export const appModule = angular.module('app', [
    channelListModule.name,
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
    var channelsState = {
        name: 'channels',
        url: '/channels',
        template: '<mh-channel-list></mh-channel-list>'
    }

    $stateProvider.state(podcastsState)
                  .state(channelsState);
});

appModule.config($urlRouterProvider => {
    $urlRouterProvider.when('', '/channels');
});

