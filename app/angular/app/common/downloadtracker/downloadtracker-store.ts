
/**
 * Created by amel on 02/10/16.
 */

import {Tracker} from './tracker';
import {DownloadTracker} from "./downloadtracker";


export class DownloadTrackerStore {

    //_episodeList: { [podcastId : string] : Promise<Episode[]>};
    //_trackers : {[podcast_id: string]: {[episode_id: string] : DownloadTracker }}  = {};
    _trackers : DownloadTracker[] = new Array();
    _launched : boolean = false;
    _pending : boolean = false;
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
/*
    add(episode) {
        let 
        let tracker = new Tracker({"trackerId": episode.getTrackerId(), "status":undefined});
        let downloadTracker = new DownloadTracker({"tracker": tracker, "episode":episode});
        this._trackers.push(downloadTracker);

        console.log("DownloadTrackerStore.add : ",downloadTracker);
        console.log(this._trackers); 
    }
*/

    getUrlWithTracker(url: string) {
        return url+"?tracker_group_id="+this.trackerGroupId;
    }

    _checkAllStatus() {
        if (this._pending) {
            return;
        }
        this._pending = true;

        //console.log("DownloadTrackerStore.checkAllStatus : start (" + this._trackers.length + ")");
        this.restangularResources.trackerGroupResource(this.trackerGroupId)
            .then( (trackersWS) => {
                let items_status = trackersWS.items_status;
                let episodes: string[] = new Array();
                //console.log(trackersWS);
                //console.log(items_status);
                // TODO : faire en sorte que le ws soit retourne en tant qu'objet liste et non une chaine de caractere
                items_status = JSON.parse(items_status.replace(/'/g,'"'));
                //console.log(items_status);
                episodes = items_status.filter((item) => {return item.status !== "Finished"} ).map((item)=>{return item.id;});
                this.episodePendings = episodes;
                this.length = this.episodePendings.length;
                this._pending = false;
            });

/*
        var trackersToTreat = this._trackers.slice(); // copy of array to avoid conflict with add method
        var trackers = Array();
        var nbTrackersTreated = 0;
        for (var downloadTracker of trackersToTreat) {
            this.restangularResources.trackerResource(downloadTracker.tracker.trackerId)
                .then( (trackerWS) => {
                    console.log("DownloadTrackerStore.checkAllStatus pending : ", nbTrackersTreated, trackersToTreat.length, this.length);
                    if (trackerWS.status !== "Finished") {
                        trackers.push(downloadTracker);                        
                    }
                    nbTrackersTreated += 1;
                    if (nbTrackersTreated === trackersToTreat.length) {
                        // all trackers have been now treated
                        this._trackers = trackers.slice(); // TODO : be carefull with conflicts with add method
                        this.length = this._trackers.length;
                        console.log("DownloadTrackerStore.checkAllStatus done : ", this.length);
                        this._pending = false;
                    }
                }, () => {
                    console.log("DownloadTrackerStore.checkAllStatus error")
                    nbTrackersTreated += 1;
                    if (nbTrackersTreated === trackersToTreat.length) {
                        // all trackers have been now treated
                        this._trackers = trackers.slice(); // TODO : be carefull with conflicts with add method
                        this.length = this._trackers.length;
                        console.log("DownloadTrackerStore.checkAllStatus done : ", this.length);
                        this._pending = false;
                    }                    
                });
        }
*/        
        //this.length = this._trackers.length;

        //     for (var episodeId in this._trackers[podcastId]) {
        //         console.log("checkAllStatus : testing "+podcastId + ":"+ episodeId);
        //         if (this._trackers[podcastId][episodeId] === null) {
        //             continue;
        //         }
        //         this.restangularResources.trackerResource(this._trackers[podcastId][episodeId].trackerId)
        //         .then( (trackerWS) => {
        //                 let tracker = new DownloadTracker(trackerWS);
        //                 if (tracker.status === "Finished") {
        //                     this._trackers[podcastId][episodeId] = null;
        //                     console.log("checkAllStatus : removing "+podcastId + ":"+ episodeId);
        //                 } else {
        //                     console.log("checkAllStatus : keeping "+podcastId + ":"+ episodeId);
        //                 }
        //             }
        //         );
        //     } 
        // }    
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

    // getDownloadTrackersPending() : Number {
    //     return this._trackers.length;
    // }
}