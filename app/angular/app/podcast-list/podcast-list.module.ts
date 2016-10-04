import {podcastModule} from "../common/podcast/podcast.module";
import {PodcastPreviewComponent} from "./podcast-preview/podcast-preview.component";
import {PodcastListComponent} from "./podcast-list.component";


export const podcastListModule = angular.module('app.podcastList', [
    podcastModule.name
]);

podcastListModule.component('smPodcastList', PodcastListComponent.config);
podcastListModule.component('smPodcastPreview', PodcastPreviewComponent.config);

