
/**
 * Created by amel on 02/10/16.
 */

import {Episode} from "./episode.component";
import {RestangularResources} from "../restangular/resources/restangular.resources";

export class EpisodeStore {

    _episodeList: Promise<Episode[]>;
    _restangularResources: RestangularResources;

    constructor(private $q,
                private restangularResources){
        'ngInject'
        this._restangularResources = restangularResources;
    }

    /*episodeList(): Promise <Episode[]>{

        let episodeList = [
            new Episode( {
                "duration": "128",
                "episode_id": "aHR0cDovL21lZGlhLnJhZGlvZnJhbmNlLXBvZGNhc3QubmV0L3BvZGNhc3QwOS8xODk5Ni0yNS4wOS4yMDE2LUlURU1BXzIxMDg2MTM4LTAubXAz",
                "published": "1474782960",
                "size": "2179200",
                "source_url": "http://media.radiofrance-podcast.net/podcast09/18996-25.09.2016-ITEMA_21086138-0.mp3",
                "subtitle": "Ã‰mission du 25.09.2016",
                "title": "Chroniques du ciel du dimanche 25 septembre 2016"
                }),
                new Episode( {
                    "duration": "126",
                    "episode_id": "aHR0cDovL21lZGlhLnJhZGlvZnJhbmNlLXBvZGNhc3QubmV0L3BvZGNhc3QwOS8xODk5Ni0xOC4wOS4yMDE2LUlURU1BXzIxMDc5NDc0LTAubXAz",
                    "published": "1474177500",
                    "size": "2146432",
                    "source_url": "http://media.radiofrance-podcast.net/podcast09/18996-18.09.2016-ITEMA_21079474-0.mp3",
                    "subtitle": "Ã‰mission du 18.09.2016",
                    "title": "Chroniques du ciel 18.09.2016"
                }
                )
        ];
        return this.$q.resolve(episodeList).then(list => this._episodeList = list);
    }*/

    episodeList(): Promise<Episode[]> {

        if (this._episodeList == null) {

            this._episodeList = this._restangularResources
                .episodeResource('aHR0cDovL3JhZGlvZnJhbmNlLXBvZGNhc3QubmV0L3BvZGNhc3QwOS9yc3NfMTg5OTYueG1s')
                .getList()
                .then((episodeList) => {
                    return episodeList.map(episode => new Episode(episode));
                });
        }

        return this._episodeList;
    }

}