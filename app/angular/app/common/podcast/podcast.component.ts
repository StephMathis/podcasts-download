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
    podcast_url: string;
    resource_uri: string;

    constructor(args) {
        this.content = args.content;
        this.podcast_url = args.podcast_url;
        this.resource_uri = args.resource_uri;
    }

    isEqual({podcast}: {podcast: Podcast}) {
        return this === podcast;
    }

}
