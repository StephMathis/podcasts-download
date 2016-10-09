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

    episode;

    setDownloaded = () => {
        console.log("EpisodePreviewComponent.setDownloaded");
        if (this.downloadNotifier !== null) {
            this.downloadNotifier();
        }
        return true;
    }

}