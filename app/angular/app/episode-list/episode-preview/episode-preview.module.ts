
/**
 * Created by amel on 02/10/16.
 */

import {episodeModule} from "../../common/episode/episode.module";

export const episodePreviewModule = angular.module('app.episodeList.episodePreview', [
    episodeModule.name
]);

episodePreviewModule.component('smEpisodePreview', EpisodePreviewComponent.config);