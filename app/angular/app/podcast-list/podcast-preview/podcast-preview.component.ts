/**
 * Created by amel on 25/09/16.
 */


export class PodcastPreviewComponent {

    static config = {
        bindings: <any>{
            podcast: '<mhPodcast'
        },
        controller: PodcastPreviewComponent,
        templateUrl: require('./podcast-preview.component.html')
    };

    podcast;
    hideEpisodes = true;
    
    toggleEpisodes() {
        this.hideEpisodes = !this.hideEpisodes;
    }

}