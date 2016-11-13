export class Channel {

    channelId: string;
    comment: string;
    title: string;
    thumbnail_url: string;
    podcastIdList: string[];

    constructor(args) {
        this.channelId = args.channel_id;
        this.comment = args.comment;
        this.title = args.title;
        this.thumbnail_url = args.thumbnail_url;
        this.podcastIdList = args.podcasts; //.slice();
    }

    isEqual({channel}: {channel: Channel}) {
        return this === channel;
    }

    getPodcastsId() : string[] {
        return this.podcastIdList;
    }
}

