
/**
 * Created by amel on 02/10/16.
 */


import {episodeModule} from "../../common/episode/episode.module";
import {EpisodePreviewComponent} from "./episode-preview.component";
import {filtersModule} from '../../common/filters/filters.module';
import {downloadTrackerModule} from '../../common/downloadtracker/downloadtracker.module';

export const episodePreviewModule = angular.module('app.episodeList.episodePreview', [
    episodeModule.name,
    downloadTrackerModule.name
]);

episodePreviewModule.component('mhEpisodePreview', EpisodePreviewComponent.config);


