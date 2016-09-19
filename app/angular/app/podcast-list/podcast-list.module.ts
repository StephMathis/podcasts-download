/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {TrackViewComponent} from './podcast-view/track-list/track-view/track-view.component';


export const podcastListModule = angular.module('app.podcastList', []);

podcastListModule.component('mhTrackComponent', TrackViewComponent.config);

