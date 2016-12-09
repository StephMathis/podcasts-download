/**
 * Created by amel on 25/09/16.
 */

import {Podcast} from "../../common/podcast/podcast.component";

export class PodcastViewComponent {

    static config = {
        bindings: <any>{
            podcast: '<mhPodcast',
            onPodcastRemove: '&mhOnPodcastRemove'
        },
        controller: PodcastViewComponent,
        templateUrl: require('./podcast-view.component.html')
    };

    /* inputs */
    podcast : Podcast;
    /* bindings */
    onPodcastRemove;

    constructor(private $mdDialog, private $scope) {
        'ngInject';

    }    
}