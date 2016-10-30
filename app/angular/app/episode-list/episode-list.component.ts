/**
 * Created by amel on 02/10/16.
 */

import {Episode} from "../common/episode/episode";
import {EpisodeStore} from "../common/episode/episode-store";
import {RestangularResources} from "../common/restangular/resources/restangular.resources";

export class EpisodeListComponent {

    podcastId : string;
    episodeList : Episode[];
    isLoading: Boolean;

    static config = {
        bindings : <any>{
            podcastId: '<mhPodcastId'
        },
        controller: EpisodeListComponent,
        templateUrl: require('./episode-list.component.html')
    };

    constructor(private episodeStore: EpisodeStore) {
        'ngInject';
        this.loadEpisodeList();
    }

    loadEpisodeList() {
        this.isLoading = true;
        this.episodeStore.episodeList(this.podcastId)
            .then(episodeList => {
                this.episodeList = episodeList;
                this.isLoading = false;
            });
    }
}
