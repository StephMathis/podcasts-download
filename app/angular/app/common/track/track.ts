interface TrackSchema {
    title?: string;
}

export class Track implements TrackSchema {

    title: string;

    constructor(args: TrackSchema) {
        this.title = args.title;
        if (this.title === null) {
            this.title = "pas terrible ce titre";
        } 
    }
}
