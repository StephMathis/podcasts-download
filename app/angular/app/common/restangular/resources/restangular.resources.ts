/**
 * Created by amel on 03/10/16.
 */
export class RestangularResources {

    constructor(private RestangularApp) {

        'ngInject';

    }

    podcastListResource(podcastId) {

        return this.RestangularApp.service('podcasts/');

    }

    podcastResource(podcastId) {

        return this.RestangularApp.service('podcasts').one(podcastId);

    }

    episodeResource(podcastId) {

        return this.RestangularApp.one('podcasts', podcastId).getList('episodes');

    }

}

