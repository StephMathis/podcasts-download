/**
 * Created by amel on 02/10/16.
 */

import {Podcast} from "../common/podcast/podcast.component";

export class PodcastListComponent {

    static config = {
        controller: PodcastListComponent,
        templateUrl: require('./podcast-list.component.html')
    };

    _podcastList: Podcast[];

    constructor(private podcastStore) {
        'ngInject';

        this.podcastList();
    }


    podcastList() {
        this.podcastStore.podcastList()
            .then(podcastList => this.podcastList = podcastList);
    }

}
