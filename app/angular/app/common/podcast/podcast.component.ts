/**
 * Created by amel on 24/09/16.
 */

interface PodcastSchema {
    content?: PodcastContent;
    podcast_url?: string;
    resource_uri?: string;
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
    resource_uri: string;

    constructor(args) {
        this.content = new PodcastContent(args.content);
        this.url = args.podcast_url;
        this.resource_uri = args.resource_uri;
    }

    isEqual({podcast}: {podcast: Podcast}) {
        return this === podcast;
    }

}
