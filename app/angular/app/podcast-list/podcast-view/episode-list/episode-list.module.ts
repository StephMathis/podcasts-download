import {EpisodeViewComponent} from './episode-view/episode-view.component';
import {episodeModule} from '../../../common/episode/episode.module';
import {EpisodeListComponent} from './episode-list.component';

export const episodeListModule = angular.module('app.episodeList', [
    episodeModule.name
]);

episodeListModule.component('mhEpisode', EpisodeViewComponent.config);
episodeListModule.component('mhEpisodeList', EpisodeListComponent.config);

