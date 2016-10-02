/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {EpisodeViewComponent} from './podcast-view/episode-list/episode-view/episode-view.component';


export const podcastListModule = angular.module('app.podcastList', []);

podcastListModule.component('mhEpisodeComponent', EpisodeViewComponent.config);

