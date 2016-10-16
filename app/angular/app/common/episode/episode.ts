/**
 * Created by amel on 02/10/16.
 */

/**
 * Created by amel on 24/09/16.
 */


export class Episode {

    duration: string;
    episodeId: string;
    published: string;
    size: string;
    sourceUrl: string;
    subtitle: string;
    title: string;
    contentUrl: string;
    contentUrlWithTracker: string;
    trackerId: string;
    downloaded: boolean;

    constructor(args) {
        this.duration = args.duration;
        this.episodeId = args.episode_id;
        this.published = args.published;
        this.size = args.size;
        this.sourceUrl = args.source_url;
        this.subtitle = args.subtitle;
        this.title = args.title;
        this.downloaded = false;
    }

    isEqual({episode}: {episode: Episode}) {
        return this === episode;
    }

    setContentUrl(contentUrl) {
        this.contentUrl = contentUrl;
    }
    getContentUrl() {
        return this.contentUrl;
    }
    setTrackerId(trackerId) {
        this.trackerId = trackerId;
    }
    getTrackerId() {
        return this.trackerId;
    }
    setContentUrlWithTracker(contentUrlWithTracker) {
        this.contentUrlWithTracker = contentUrlWithTracker;
    }
    getContentUrlWithTracker() {
        return this.contentUrlWithTracker;
    }
    setAlreadyDownloaded(downloaded : boolean) {
        this.downloaded = downloaded;
    }

}

