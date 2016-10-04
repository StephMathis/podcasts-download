/**
 * Created by amel on 02/10/16.
 */

import {episodeModule} from "../common/episode/episode.module";
import {EpisodePreviewComponent} from "./episode-preview/episode-preview.component";
import {EpisodeListComponent} from "./episode-list.component";

export const episodeListModule = angular.module('app.episodeList', [
    episodeModule.name
]);

episodeListModule.component('smEpisodeList', EpisodeListComponent.config);
episodeListModule.component('smEpisodePreview', EpisodePreviewComponent.config);
