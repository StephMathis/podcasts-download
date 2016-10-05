/**
 * Created by amel on 02/10/16.
 */

import {Episode} from "../common/episode/episode.component";
import {RestangularResources} from "../common/restangular/resources/restangular.resources";

export class EpisodeListComponent {

    static config = {
        controller: EpisodeListComponent,
        templateUrl: require('./episode-list.component.html')
    };

    _episodeList: Promise<Episode[]>;
   // restangularResources: RestangularResources;

    constructor(private episodeStore) {
        'ngInject';

        this.episodeList();
    }


    episodeList() {
        this.episodeStore.episodeList()
            .then(episodeList => this.episodeList = episodeList);
    }


}
