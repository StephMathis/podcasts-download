/**
 *
 * (c) 2016 metaheuristic.fr
 *
 * $Id: $
 */

export class TrackViewComponent {

    static config = {
        bindings: <any>{
            track: '<mhTrack'
        },
        controller: TrackViewComponent,
        templateUrl: require('./track-view.component.html')
    };

    track;

}
