/**
 * Created by metaheuristic on 25/09/16.
 */

import {Channel} from "../channel/channel";
import {ChannelStore} from "../channel/channel-store";

export class ChannelViewComponent {

    static config = {
        controller: ChannelViewComponent,
        templateUrl: require('./channel-view.component.html')
    };

    channelId : string;
    channel : Channel;

    constructor(private $stateParams, private channelStore : ChannelStore) {
        'ngInject';

        this.channelId = this.$stateParams.channelId;
        this.channelStore.loadChannel(this.channelId).then((channel) => {
            this.channel = channel;
        });
    }
}
