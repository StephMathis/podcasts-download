/**
 * Created by metaheuristic on 02/10/16.
 */
import {Channel} from "./channel/channel";
import {ChannelStore} from "./channel/channel-store";
import {DownloadTrackerStore} from "../common/downloadtracker/downloadtracker-store";

export class ChannelListComponent {

    static config = {
        controller: ChannelListComponent,
        templateUrl: require('./channel-list.component.html')
    };

    channelList: Channel[];
    selectedChannel: Channel = null;

    constructor(private $mdDialog, private $scope, private channelStore: ChannelStore,  private downloadTrackerStore: DownloadTrackerStore) {
        'ngInject';

        this.loadChannelList();
    }


    loadChannelList() {
        this.channelStore.loadChannelList()
            .then(list => this.channelList = list);
    }

    showAddChannelPrompt(event) {
        let options = {
            clickOutsideToClose: true,
            scope: this.$scope.$new(),
            template: `<mh-channel-add mh-on-channel-add="$ctrl.validateNewChannel(channel)" 
                                            mh-on-cancel="$ctrl.cancel()"></mh-channel-add>`
        }

        this.$mdDialog.show(options);
    }

    validateNewChannel(channel: Channel) {
        this.$mdDialog.cancel();

        if (channel !== undefined) {
            this.channelStore.createChannel(channel).then(() => {
                this.loadChannelList();
            });
        }
    }

    removeChannel(channel: Channel) {
        this.channelStore.removeChannel(channel.channelId).then(() => {
            this.loadChannelList();
        })
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    selectChannel({channel} : {channel: Channel}) {
        this.selectedChannel = channel;
    }

}
