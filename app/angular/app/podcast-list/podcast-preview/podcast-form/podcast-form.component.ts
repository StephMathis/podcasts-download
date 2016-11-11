/**
 * Created by amel on 11/11/16.
 */

import {Podcast} from "../../../common/podcast/podcast.component";

export class PodcastFormComponent {

    static config = {
        bindings: <any>{
            onPodcastAdd: '&mhOnPodcastAdd',
        },
        controller: PodcastFormComponent,
        templateUrl: require('./podcast-form.component.html')
    };

    podcast: Podcast;
    onPodcastAdd;

    constructor() {

    }

    addPodcast({podcast}: {podcast: Podcast}) {
        this.onPodcastAdd({podcast: podcast});
    }

}
