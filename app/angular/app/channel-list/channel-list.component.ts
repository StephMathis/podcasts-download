/**
 * Created by metaheuristic on 02/10/16.
 */
import {Channel} from "./channel/channel";
import {ChannelStore} from "./channel/channel-store";

export class ChannelListComponent {

    static config = {
        controller: ChannelListComponent,
        templateUrl: require('./channel-list.component.html')
    };

    channelList: Channel[];
    channel: Channel;

    constructor(private $mdDialog, private $scope, private channelStore: ChannelStore) {
        'ngInject';

        this.loadChannelList();
    }


    loadChannelList() {
        this.channelStore.loadChannelList()
            .then(list => this.channelList = list);
    }

    /*showAddChannelPrompt(event) {
        let options = {
            scope: this.$scope.$new(),
            title: 'Une nouvelle chaine ? génial, je me réjouis !',
            textContent: 'Quel nom lui donnez-vous ?',
            placeholder: 'Histoire ? Géopoltique ?',
            targetEvent: event,
            ok: 'Okay!',
            cancel: 'arf, j\'hésite, une autre fois ...'
        }
        let prompt = this.$mdDialog.prompt(options);

        let validateNewChannel = (title) => {
            if (title !== undefined) {
                this.channelStore.createChannel(title).then(() => {
                    this.loadChannelList();
                });
            }
        }

        let cancelNewChannel = () => {
        }

        this.$mdDialog.show(prompt).then(validateNewChannel, cancelNewChannel);
    }*/

    showAddChannelPrompt(event) {
        let options = {
            clickOutsideToClose: true,
            scope: this.$scope.$new(),
            template: `<form ng-cloak>
                            <md-toolbar>
                                <div class="md-toolbar-tools">
                                    <h2>Une nouvelle chaine ? génial, je me réjouis !</h2>
                                    <md-button class="md-icon-button" ng-click="$ctrl.cancel()">
                                        <i class="material-icons">close</i>
                                    </md-button>
                                </div>
                            </md-toolbar>
                            <mh-channel-add channel="channel" mh-on-channel-add="$ctrl.validateNewChannel(channel)"><mh-channel-add>
                        </form>`
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

}
