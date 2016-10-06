/**
 * Created by amel on 02/10/16.
 */

import {episodeModule} from "../common/episode/episode.module";
import {EpisodePreviewComponent} from "./episode-preview/episode-preview.component";
import {EpisodeListComponent} from "./episode-list.component";

export const episodeListModule = angular.module('app.episodeList', [
    episodeModule.name,
    'ngMaterial'
]);

episodeListModule.component('mhEpisodeList', EpisodeListComponent.config);
episodeListModule.component('mhEpisodePreview', EpisodePreviewComponent.config);