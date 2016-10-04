/**
 *
 * (c) 2016 metaheuristic.fr
 *
 * $Id: $
 */

export class EpisodeViewComponent {

    static config = {
        bindings: <any>{
            episode: '<mhEpisode'
        },
        controller: EpisodeViewComponent,
        templateUrl: require('./episode-view.component.html')
    };

    episode;

}
