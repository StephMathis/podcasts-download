/**
 * Created by amel on 14/10/16.
 */


export class TrackerPreviewComponent {

    static config = {
        bindings: <any>{
            trackerId: '<mhTracker'
        },
        controller: TrackerPreviewComponent,
        templateUrl: require('./tracker-preview.component.html')
    };

    status;
    trackerId;

    constructor(private trackerStore) {
        'ngInject';

        console.log(this.trackerId);
        this.getTrackerStatus();
    }

    getTrackerStatus() {
        console.log('ttttttt');
        this.trackerStore.tracker(this.trackerId)
            .then(tracker => {
                this.status = tracker.status;
                console.log(this.status);
            });

        return this.status;
    }



}
