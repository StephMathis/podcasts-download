/**
 * Created by amel on 02/10/16.
 */

/**
 * Created by amel on 24/09/16.
 */


export class Episode {

    duration: string;
    episode_id: string;
    published: string;
    size: string;
    source_url: string;
    subtitle: string;
    title: string;

    constructor(args) {
        this.duration = args.duration;
        this.episode_id = args.episode_id;
        this.published = args.published;
        this.size = args.size;
        this.source_url = args.source_url;
        this.subtitle = args.subtitle;
        this.title = args.title;
    }

    isEqual({episode}: {episode: Episode}) {
        return this === episode;
    }

}

