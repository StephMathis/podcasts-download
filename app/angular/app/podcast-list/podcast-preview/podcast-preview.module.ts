/**
 * Created by amel on 25/09/16.
 */


import {PodcastPreviewComponent} from "./podcast-preview.component";
import {podcastModule} from "../../common/podcast/podcast.module";

export const podcastPreviewModule = angular.module('app.podcastList.podcastPreview', [
    podcastModule.name
]);

podcastPreviewModule.component('smPodcastPreview', PodcastPreviewComponent.config);
