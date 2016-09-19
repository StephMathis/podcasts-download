/**
 *
 * (c) 2016 metaheuristic.fr
 *
 * $Id: $
 */

import {Track} from '../../../common/track/track';

export class TrackListComponent {

    static config = {
        bindings: <any>{
            //track: '<mhTrack'
        },
        controller: TrackListComponent,
        templateUrl: require('./track-list.component.html')
    };

    trackList : Track[] = [];
    
    constructor() {
        this.trackList.push(new Track({'title':'le monde en tique'}));
        this.trackList.push(new Track({'title':'le monde en toc'}));
    }

}
