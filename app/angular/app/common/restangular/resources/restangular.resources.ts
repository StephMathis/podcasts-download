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

    episodeUrl(podcastId : string, episodeId : string) {
        return this.podcastResource(podcastId)
                   .one('episodes',episodeId)
                   .getRestangularUrl();
    }

    episodeContentUrl(podcastId : string, episodeId : string) {
        return this.episodeUrl(podcastId, episodeId) + '/content/';
    }

    episodeContentUrlWithTracker(podcastId : string, episodeId : string, trackerId : string) {
        return this.podcastResource(podcastId)
                   .one('episodes', episodeId)
                   .one('contentwithtracker', trackerId)
                   .getRestangularUrl();
    }

    trackerResource(trackerId) {
        return this.RestangularApp.service('trackers').one(trackerId).get();
    }

}

