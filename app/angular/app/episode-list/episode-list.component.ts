/**
 * Created by amel on 02/10/16.
 */

import {Episode} from "../common/episode/episode";
import {RestangularResources} from "../common/restangular/resources/restangular.resources";

export class EpisodeListComponent {

    podcastId : string;

    static config = {
        bindings : <any>{
            podcastId: '<mhPodcastId'
        },
        controller: EpisodeListComponent,
        templateUrl: require('./episode-list.component.html')
    };

    _episodeList: Promise<Episode[]>;
    restangularResources: RestangularResources;
    isLoading;

    constructor(private episodeStore) {
        'ngInject';
        this.isLoading = true;

        this.episodeList();
    }


    episodeList() {
        this.episodeStore.episodeList(this.podcastId)
            .then(episodeList => {
                this.episodeList = episodeList;
                this.isLoading = false;
            });
    }


}
