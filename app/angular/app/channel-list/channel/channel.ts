export class Channel {

    channelId: string;
    title: string;
    podcastIdList: string[];

    constructor(args) {
        this.channelId = args.channel_id;
        this.title = args.title;
        this.podcastIdList = args.podcasts; //.slice();
    }

    isEqual({channel}: {channel: Channel}) {
        return this === channel;
    }

    getPodcastsId() : string[] {
        return this.podcastIdList;
    }
}

