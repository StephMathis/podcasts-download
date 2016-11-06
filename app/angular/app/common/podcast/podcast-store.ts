/**
 * Created by amel on 24/09/16.
 */

import {Podcast, PodcastContent} from "./podcast.component";
//import {RestangularApp} from "../restangular/restangular.component";

export class PodcastStore {

    _podcastList: Promise<Podcast[]>;

    constructor(private $q, private restangularResources){
        'ngInject'

    }

    podcastList(): Promise<Podcast[]> {
        if (this._podcastList == null) {
            this._podcastList = this.restangularResources.podcastListResource()
                .then((podcastList) => {
                    return podcastList.map(podcast => new Podcast(podcast));
                });
        }
        return this._podcastList;
    }
}