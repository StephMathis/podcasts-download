/**
 * Created by amel on 24/09/16.
 */

interface PodcastSchema {
    content?: PodcastContent;
    podcast_url?: string;
}

export class PodcastContent{
    link: string;
    title: string;
    description: string;
    cover_url: string;

    constructor(args) {
        this.title = args.title;
        this.description = args.description;
        this.cover_url = args.cover_url;
        this.link = args.link;
    }
}

export class Podcast implements PodcastSchema{

    content: PodcastContent;
    url: string;
    podcastId: string;

    constructor(args) {
        this.content = new PodcastContent(args.content);
        this.url = args.podcast_url;
        this.podcastId = args.podcast_id;        
    }

    isEqual({podcast}: {podcast: Podcast}) {
        return this === podcast;
    }

}
