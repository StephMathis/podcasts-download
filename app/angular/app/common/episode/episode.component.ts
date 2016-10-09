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
    setAlreadyDownloaded(downloaded : boolean) {
        this.downloaded = downloaded;
    }

}

