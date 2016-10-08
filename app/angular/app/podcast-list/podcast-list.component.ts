/**
 * Created by amel on 02/10/16.
 */
//require('!!style!css!./podcast-list.style.css');
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
            .then(list => this._podcastList = list);
    }

}
