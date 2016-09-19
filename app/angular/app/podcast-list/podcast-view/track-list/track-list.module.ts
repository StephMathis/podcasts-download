import {TrackViewComponent} from './track-view/track-view.component';
import {trackModule} from '../../../common/track/track.module';
import {TrackListComponent} from './track-list.component';

export const trackListModule = angular.module('app.trackList', [
    trackModule.name
]);

trackListModule.component('mhTrack', TrackViewComponent.config);
trackListModule.component('mhTrackList', TrackListComponent.config);

