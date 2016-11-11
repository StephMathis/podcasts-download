import {podcastModule} from "../common/podcast/podcast.module";
import {PodcastPreviewComponent} from "./podcast-preview/podcast-preview.component";
import {PodcastListComponent} from "./podcast-list.component";
import {downloadTrackerModule} from "../common/downloadtracker/downloadtracker.module";
import {PodcastFormComponent} from "./podcast-preview/podcast-form/podcast-form.component";

export const podcastListModule = angular.module('app.podcastList', [
    podcastModule.name,
    downloadTrackerModule.name
]);

podcastListModule.component('mhPodcastList', PodcastListComponent.config);
podcastListModule.component('mhPodcastPreview', PodcastPreviewComponent.config);
podcastListModule.component('mhPodcastForm', PodcastFormComponent.config);


