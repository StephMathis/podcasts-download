
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

    createChannel(title: string) : any {
        let res = this.restangularResources.createChannel(title);
        console.log("ChannelStore",res);
        return res;
    }

    addPodcast(channelId: string, podcastUrl : string) : any {
        console.log("ChannelStore/addPodcast","podcastId", podcastUrl);
        let res = this.restangularResources.addPodcastToChannel(channelId, podcastUrl);
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
