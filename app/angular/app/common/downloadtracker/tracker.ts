/**
 * Created by amel on 02/10/16.
 */

/**
 * Created by amel on 24/09/16.
 */


export class Tracker {

    trackerId:string;
    status:string;

    constructor(args) {
        this.trackerId = args.trackerId;
        this.status = args.status;
    }

    isEqual({tracker}: {tracker: Tracker}) {
        return this === tracker;
    }
}
