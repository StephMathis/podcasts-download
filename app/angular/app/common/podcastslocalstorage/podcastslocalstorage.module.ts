/**
 * Created by mh on 03/10/16.
 */

import {PodcastsLocalstorageResources} from './resources/podcastslocalstorage.resources';



export const podcastslocalstorageModule = angular.module('app.common.podcastslocalstorage', [
    'LocalStorageModule'
]);



podcastslocalstorageModule.service('podcastsLocalstorageResources', PodcastsLocalstorageResources);