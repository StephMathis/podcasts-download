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

    podcastPointer(podcastId: string) {
        return this.RestangularApp.service('podcasts').one(podcastId);
    }

    podcastResource(podcastId: string) {
        return this.podcastPointer(podcastId).get();
    }

    episodeResource(podcastId: string) {
        return this.RestangularApp.one('podcasts', podcastId).getList('episodes');

    }

    episodeUrl(podcastId: string, episodeId: string) {
        return this.podcastPointer(podcastId)
            .one('episodes', episodeId)
            .getRestangularUrl();
    }

    episodeContentUrl(podcastId: string, episodeId: string) {
        return this.episodeUrl(podcastId, episodeId) + '/content/';
    }

    episodeContentUrlWithTracker(podcastId: string, episodeId: string, trackerId: string) {
        return this.podcastPointer(podcastId)
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

    channelResource(channelId: string) {
        return this.RestangularApp.one('channels', channelId).get();
    }

    createChannel(title: string) {
        let data = {};
        data['title'] = title;
        return this.RestangularApp.all('channels').post(data);
    }

    addPodcastToChannel(channelId: string, podcastUrl: string) {
        // TO BE REMOVED
        let data = {};
        data['podcast_url'] = podcastUrl;
        return this.RestangularApp.one('channels', channelId).all('podcasts').post(data);
    }

    updateChannel(channelId : string, data : {}) {
        // simple put performs a request with query_string
        return this.RestangularApp.one('channels', channelId).customPUT(data);
    }

    removePodcastFromChannel(channelId: string, podcastId: string) {
        /* DELETE /channels/channelId/podcasts/podcastId */
        return this.RestangularApp.one('channels', channelId).one('podcasts', podcastId).remove();
    }

    removeChannel(channelId: string) {
        /* DELETE /channels/channelId */
        return this.RestangularApp.one('channels',channelId).remove();
    }
}