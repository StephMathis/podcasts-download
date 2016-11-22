
/**
 * Created by metaheuristic on 02/10/16.
 */

import {Channel} from "./channel";
import {restangularModule} from "../../common/restangular/restangular.module";

export class ChannelStore {

    constructor(private $q,
                private restangularResources
                ){
        'ngInject'
    }

    loadChannelList(): Promise<Channel[]> {
        return this.restangularResources
                .channelListResource()
                .then((channelList) => {
                    return channelList.map(channel => new Channel(channel));
                });
    }
    
    loadChannel(channelId: string): Promise<Channel> {
        return this.restangularResources
                        .channelResource(channelId)
                        .then((channel) => {
                            return new Channel(channel);
                        });
    }

    createChannel(channel: Channel) : any {
        let data = {}
        data['comment'] = channel.comment;
        data['thumbnail_url'] = channel.thumbnail_url;
        data['title'] = channel.title;
        let res = this.restangularResources.createChannel(data);
        console.log("ChannelStore",res);
        return res;
    }

    updateChannel(channel: Channel) : any {
        let data = {}
        data['comment'] = channel.comment;
        data['thumbnail_url'] = channel.thumbnail_url;
        data['title'] = channel.title;
        data['podcasts'] = channel.podcastIdList;

        let res = this.restangularResources.updateChannel(channel.channelId, data).then();
        console.log("ChannelStore/addPodcast",res);
        return res;        
    }

    addPodcast(channel: Channel, podcastUrl : string) : any {
        console.log("ChannelStore/addPodcast","podcastId", podcastUrl);
        let data = {}
        data['comment'] = channel.comment;
        data['new_podcast_url'] = podcastUrl;
        data['thumbnail_url'] = channel.thumbnail_url;
        data['title'] = channel.title;
        data['podcasts'] = channel.podcastIdList;

        let res = this.restangularResources.updateChannel(channel.channelId, data).then();
        console.log("ChannelStore/addPodcast",res);
        return res;        
    }

    removePodcast(channelId: string, podcastId : string) : any {
        return this.restangularResources.removePodcastFromChannel(channelId, podcastId);
    }

    removeChannel(channelId: string) : any {
        return this.restangularResources.removeChannel(channelId);
    }

}
