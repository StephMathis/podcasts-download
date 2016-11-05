/**
 * Created by amel on 03/10/16.
 */
export class RestangularResources {

    constructor(private RestangularApp) {

        'ngInject';

    }

    podcastListResource() {

        return this.RestangularApp.service('podcasts').getList();
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

    trackerGroupResource(trackerGroupId) {
        return this.RestangularApp.service('trackergroups').one(trackerGroupId).get();
        //return this.RestangularApp.oneUrl('trackers', 'http://steph-linux/podcast-api/v1/trackers/' + trackerId).get();
    }

    channelListResource() {
        return this.RestangularApp.service('channels').getList();
    }

    channelResource(channelId : string) {
        return this.RestangularApp.serivce('channels').one(channelId).get();
    }
}

