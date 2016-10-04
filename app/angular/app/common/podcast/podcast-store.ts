/**
 * Created by amel on 24/09/16.
 */

import {Podcast, PodcastContent} from "./podcast.component";
import {RestangularApp} from "../restangular/restangular.component";

export class PodcastStore {

    _podcastList: Promise<Podcast[]>;
    restangularApp: RestangularApp;
    restangularResources;

    constructor(private $q){
        'ngInject'

        this.podcastList();
    }

    /*podcastList(): Promise <Podcast[]>{

       let content = new PodcastContent(
            {
                'link': 'http://www.france-info.com/',
                'title': 'Chroniques du ciel',
                'description': "Chaque dimanche, toute l'actualitÃ© Ã©conomique des compagnies aÃ©riennes, des constructeurs et des aÃ©roports, mais aussi les nouvelles technologies, les sports, l'aviation lÃ©gÃ¨re, le vol libre.",
                'cover_url': 'http://media.radiofrance-podcast.net/podcast09/RF_OMM_0000014223_ITE.jpg'
            }
        )

        let podcast = new Podcast({
            "content": content,
            "podcast_url": null,
            "resource_uri": "/api/v1/podcasts/aHR0cDovL3JhZGlvZnJhbmNlLXBvZGNhc3QubmV0L3BvZGNhc3QwOS9yc3NfMTg5OTYueG1s/"
        });

        this._podcastList = [podcast];
        return this.$q.resolve(this._podcastList);

    }*/

    podcastList(): Promise<Podcast[]> {

            if (this._podcastList == null) {

            this._podcastList = this.restangularResources
                .podcastResource('aHR0cDovL3JhZGlvZnJhbmNlLXBvZGNhc3QubmV0L3BvZGNhc3QwOS9yc3NfMTg5OTYueG1s')
                .getList()
                .then((podcastList) => {
                    return podcastList.map(podcast => new Podcast(podcast));
                });
        }

        return this._podcastList;
    }
}