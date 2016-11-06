
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
}
