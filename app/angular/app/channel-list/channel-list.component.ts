/**
 * Created by amel on 02/10/16.
 */
import {Channel} from "./channel/channel";
import {channelModule} from "./channel/channel.module";

export class ChannelListComponent {

    static config = {
        controller: ChannelListComponent,
        templateUrl: require('./channel-list.component.html')
    };

    channelList: Channel[];

    constructor(private channelStore) {
        'ngInject';

        this.loadChannelList();
    }


    loadChannelList() {
        this.channelStore.loadChannelList()
            .then(list => this.channelList = list);
    }

}
