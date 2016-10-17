/**
 * Created by amel on 02/10/16.
 */

export class EpisodePreviewComponent {

    downloadNotifier: () => {};

    static config = {
        bindings: <any>{
            episode: '<mhEpisode',
            downloadNotifier: '&mhDownloadNotifier'
        },
        controller: EpisodePreviewComponent,
        templateUrl: require('./episode-preview.component.html')
    };

    constructor(private downloadTrackerStore) {
        'ngInject';
    }

    episode;

    getContentUrlWithTracker = () => {
        //console.log(this.episode.contentUrl);
        //console.log(this.downloadTrackerStore.getUrlWithTracker(this.episode.contentUrl));
        return this.downloadTrackerStore.getUrlWithTracker(this.episode.contentUrl);
    }

    downloadRequested = () => {
        if (this.downloadNotifier !== null) {
            this.downloadNotifier();
        }
        this.downloadTrackerStore.add(this.episode);
        return true;
    }

}