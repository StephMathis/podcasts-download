/**
 * Created by amel on 03/10/16.
 */
export class RestangularResources {

    constructor(private RestangularApp) {

        'ngInject';

    }

    podcastListResource() {

        return this.RestangularApp.service('podcasts/');

    }

    podcastResource(podcastId : string) {

        return this.RestangularApp.service('podcasts').one(podcastId);

    }

    episodeResource(podcastId : string) {
        return this.RestangularApp.one('podcasts', podcastId).getList('episodes');

    }

    episodeContentUrl(podcastId : string, episodeId : string) {
        return this.podcastResource(podcastId)
                   .one('episodes',episodeId)
                   .getRestangularUrl() 
                   + '/content/';
    }

}

