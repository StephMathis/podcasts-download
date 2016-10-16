/**
 * Created by amel on 02/10/16.
 */

/**
 * Created by amel on 24/09/16.
 */

import {Tracker} from './tracker';
import {Episode} from '../episode/episode';

export class DownloadTracker {

    tracker: Tracker;
    episode:Episode;

    constructor(args) {
        this.tracker = args.tracker;
        this.episode = args.episode;
    }

    isEqual({trackerDownload}: {trackerDownload: DownloadTracker}) {
        return this === trackerDownload;
    }
}
