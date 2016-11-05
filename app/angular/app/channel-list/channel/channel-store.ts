
/**
 * Created by amel on 02/10/16.
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
                    console.log("channel-store",channelList);
                    let buildchannel = (channelWS) => {
                        let channel = new Channel(channelWS);
                        //let contentUrl = this.restangularResources.channelContentUrl(podcastId, channelWS.channel_id);
                        //let trackerId = Math.floor(Math.random() * 100000) + 1;  
                        //let contentUrlWithTracker = this.restangularResources.channelContentUrlWithTracker(podcastId, channelWS.channel_id, trackerId);
                        //channel.setContentUrl(contentUrl);
                        //channel.setTrackerId(trackerId);
                        //channel.setContentUrlWithTracker(contentUrlWithTracker);
                        //channel.setAlreadyDownloaded(this.getAlreadyDownloaded(channel));
                        return channel;
                    } 
                    return channelList.map(channel => new Channel(channel));
                });
    }
}
