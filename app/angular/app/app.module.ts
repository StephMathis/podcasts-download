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
        template: '<mh-podcast-list mh-podcast-filter="\'examples\'"></mh-podcast-list>'
    }
    var channelsState = {
        name: 'channels',
        url: '/channels',
        template: '<mh-channel-list layout="column" flex></mh-channel-list>'
    }
    var channelState = {
        name: 'channel',
        url: '/channel/:channelId',
        template: '<mh-channel-view></mh-channel-view>'        
    }

    $stateProvider.state(podcastsState)
                  .state(channelsState)
                  .state(channelState);
});

appModule.config($urlRouterProvider => {
    $urlRouterProvider.when('', '/channels');
});


appModule.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('red')
      .dark();
});