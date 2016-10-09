
/**
 * Created by amel on 02/10/16.
 */

import {Episode} from "./episode.component";
//import {RestangularResources} from "../restangular/resources/restangular.resources";
import {podcastslocalstorageModule} from "../podcastslocalstorage/podcastslocalstorage.module";

export class EpisodeStore {

    //_episodeList: { [podcastId : string] : Promise<Episode[]>};

    constructor(private $q,
                private restangularResources, 
                private podcastsLocalstorageResources
                ){
        'ngInject'
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

    episodeList(podcastId): Promise<Episode[]> {
/*
        if (this._episodeList == null) {

            this._episodeList = this.restangularResources
                .episodeResource(podcastId)
                .then((episodeList) => {
                    return episodeList.map(episode => new Episode(episode));
                });
        }
*/
        return this.restangularResources
                .episodeResource(podcastId)
                .then((episodeList) => {
                    let buildEpisode = (episodeWS) => {
                        let episode = new Episode(episodeWS);
                        let contentUrl = this.restangularResources.episodeContentUrl(podcastId, episodeWS.episode_id);
                        episode.setContentUrl(contentUrl);
                        episode.setAlreadyDownloaded(this.getAlreadyDownloaded(episode));
                        return episode;
                    } 
                    return episodeList.map(episode => buildEpisode(episode));
                });
    }

    getAlreadyDownloaded(episode: Episode) : boolean {
        return this.podcastsLocalstorageResources.getProperty("downloaded." + episode.episodeId) === true;
    }
    setAlreadyDownloaded(episode: Episode) {
        console.log("setAlreadyDownloaded : "+this.podcastsLocalstorageResources.getProperty("downloaded." + episode.episodeId));
        episode.setAlreadyDownloaded(true);
        this.podcastsLocalstorageResources.setProperty("downloaded." + episode.episodeId, true);
        console.log("setAlreadyDownloaded : "+this.podcastsLocalstorageResources.getProperty("downloaded." + episode.episodeId));
    }
}