/**
 *
 * (c) 2016 metaheuristic.fr
 *
 * $Id: $
 */

import {Episode} from '../../../common/episode/episode';

export class EpisodeListComponent {

    static config = {
        bindings: <any>{
            //episode: '<mhEpisode'
        },
        controller: EpisodeListComponent,
        templateUrl: require('./episode-list.component.html')
    };

    episodeList : Episode[] = [];
    
    constructor() {
        this.episodeList.push(new Episode({'title':'le monde en tique'}));
        this.episodeList.push(new Episode({'title':'le monde en toc'}));
    }

}
