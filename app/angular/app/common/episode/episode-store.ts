
/**
 * Created by amel on 02/10/16.
 */

import {Episode} from "./episode";
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

    episodeList(podcastId): Promise<Episode[]> {
        return this.restangularResources
                .episodeResource(podcastId)
                .then((episodeList) => {
                    let buildEpisode = (episodeWS) => {
                        let episode = new Episode(episodeWS);
                        let contentUrl = this.restangularResources.episodeContentUrl(podcastId, episodeWS.episode_id);
                        let trackerId = Math.floor(Math.random() * 100000) + 1;  
                        let contentUrlWithTracker = this.restangularResources.episodeContentUrlWithTracker(podcastId, episodeWS.episode_id, trackerId);
                        episode.setContentUrl(contentUrl);
                        episode.setTrackerId(trackerId);
                        episode.setContentUrlWithTracker(contentUrlWithTracker);
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
        episode.setAlreadyDownloaded(true);
        this.podcastsLocalstorageResources.setProperty("downloaded." + episode.episodeId, true);
    }
}