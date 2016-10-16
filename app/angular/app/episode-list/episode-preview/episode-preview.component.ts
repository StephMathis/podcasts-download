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

    setDownloaded = () => {
        console.log("EpisodePreviewComponent.setDownloaded");
        console.log('https://metaheuristic.fr/podcast-api/v1/trackers/' + this.episode.trackerId);
        if (this.downloadNotifier !== null) {
            this.downloadNotifier();
        }
        console.log(this.episode);
        this.downloadTrackerStore.add(this.episode);
        this.downloadTrackerStore.checkAllStatus();
        return true;
    }

}