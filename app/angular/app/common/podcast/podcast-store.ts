/**
 * Created by amel on 24/09/16.
 */

import {Podcast, PodcastContent} from "./podcast.component";
//import {RestangularApp} from "../restangular/restangular.component";

export class PodcastStore {

    _defaultPodcastList: Promise<Podcast[]>;

    constructor(private $q, private restangularResources){
        'ngInject'

    }

    loadDefaultPodcastList(): Promise<Podcast[]> {
        if (this._defaultPodcastList == null) {
            this._defaultPodcastList = this.restangularResources.podcastListResource()
                .then((podcastList) => {
                    return podcastList.map(podcast => new Podcast(podcast));
                });
        }
        return this._defaultPodcastList;
    }
    
    loadPodcastListByIds(podcastIdList : string[]) /* : Promise<Podcast[]> */ {
        let podcastPromises : Promise<Podcast>[] = new Array<Promise<Podcast>>();
        podcastIdList.forEach( podcastId => {
            let aPodcastPromise : Promise<Podcast>;
            aPodcastPromise = this.restangularResources.podcastResource(podcastId).then( podcast => new Podcast(podcast));
            podcastPromises.push(aPodcastPromise);
        });
        
        return Promise.all(podcastPromises);
    }
}
