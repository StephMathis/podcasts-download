import {podcastModule} from "../common/podcast/podcast.module";
import {PodcastListComponent} from "./podcast-list.component";
import {downloadTrackerModule} from "../common/downloadtracker/downloadtracker.module";
import {PodcastFormComponent} from "./podcast-preview/podcast-form/podcast-form.component";
import {PodcastViewComponent} from "./podcast-view/podcast-view.component";

export const podcastListModule = angular.module('app.podcastList', [
    'ngclipboard',
    podcastModule.name,
    downloadTrackerModule.name
]);

podcastListModule.component('mhPodcastList', PodcastListComponent.config);
podcastListModule.component('mhPodcastView', PodcastViewComponent.config);
podcastListModule.component('mhPodcastForm', PodcastFormComponent.config);


