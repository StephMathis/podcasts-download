/**
 * Created by amel on 02/10/16.
 */

export class EpisodePreviewComponent {

    static config = {
        bindings: <any>{
            episode: '<mhEpisode'
        },
        controller: EpisodePreviewComponent,
        templateUrl: require('./episode-preview.component.html')
    };

    episode;

}