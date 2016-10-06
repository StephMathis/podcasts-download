
/**
 * Created by amel on 02/10/16.
 */

import {episodeModule} from "../../common/episode/episode.module";
import {EpisodePreviewComponent} from "./episode-preview.component";

export const episodePreviewModule = angular.module('app.episodeList.episodePreview', [
    episodeModule.name,
    'ngMaterial'
]);

episodePreviewModule.component('mhEpisodePreview', EpisodePreviewComponent.config);