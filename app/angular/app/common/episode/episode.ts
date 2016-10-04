interface EpisodeSchema {
    title?: string;
}

export class Episode implements EpisodeSchema {

    title: string;

    constructor(args: EpisodeSchema) {
        this.title = args.title;
        if (this.title === null) {
            this.title = "pas terrible ce titre";
        } 
    }
}
