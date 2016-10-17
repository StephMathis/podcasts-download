
/**
 * Created by amel on 02/10/16.
 */

import {Tracker} from './tracker';
import {DownloadTracker} from "./downloadtracker";


export class DownloadTrackerStore {

    _launched : boolean = false;
    _pending : boolean = false;
    _lastaddedcall: number;
    length: number = 0;

    trackerGroupId: string;
    episodePendings: string[] = new Array();

    constructor(private $q,
                private $interval,
                private restangularResources
                ){
        'ngInject'
        this.trackerGroupId = "podcast-" + Math.floor(Math.random() * 100000) + 1;
        this.checkAllStatus();
        }

    add(episode) {
        console.log(this._lastaddedcall);
        this._lastaddedcall = Date.now();
    }


    getUrlWithTracker(url: string) {
        return url+"?tracker_group_id="+this.trackerGroupId;
    }

    _checkAllStatus() {
        if (this._pending  // already launched but not finished
           || this._lastaddedcall === undefined  // no item added, so this tracker has not been used
           || (this.length === 0 && this._lastaddedcall + 5000 < Date.now())) // no item in the queue and no item added since a while
           {
            return;
        }
        this._pending = true;

        this.restangularResources.trackerGroupResource(this.trackerGroupId)
            .then( (trackersWS) => {
                let items_status = trackersWS.items_status;
                let episodes: string[] = new Array();
                episodes = items_status.filter((item) => {return item.status !== "Finished"} ).map((item)=>{return item.id;});
                this.episodePendings = episodes;
                this.length = this.episodePendings.length;
                this._pending = false;
            });
    }

    checkAllStatus() {
        if (this._launched === false) {
            this._launched = true;
            this.$interval(() => {
                this._checkAllStatus();
            }, 1000);
        }
        return;
    }
}