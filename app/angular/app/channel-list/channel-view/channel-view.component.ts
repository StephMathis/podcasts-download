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

    constructor(private $mdDialog, private $scope, private $stateParams, private channelStore : ChannelStore) {
        'ngInject';

        this.channelId = this.$stateParams.channelId;
        this.loadChannel();
    }

    loadChannel() {
        this.channelStore.loadChannel(this.channelId).then((channel) => {
            this.channel = channel;
        });
    }


    showAddPocastPrompt(event) {
        let options = {
            scope: this.$scope.$new(),
            title: 'Ajouter un podcast ? Bonne idée !',
            textContent: 'Quel est son url ?',
            placeholder: 'xml ou rss',
            targetEvent: event,
            ok: 'Okay!',
            cancel: 'arf, j\'hésite, une autre fois ...'
        }
        let prompt = this.$mdDialog.prompt(options);

        let validateAddPodcast = (podcastUrl) => {
            console.log("ChannelViewComponent", "validateAddPodcast", podcastUrl);
            if (podcastUrl !== undefined) {
                this.channelStore.addPodcast(this.channelId, podcastUrl).then(() => {
                    this.loadChannel();
                });
            }
        }

        let cancelAddPodcast = () => {
            console.log("ChannelViewComponent", "cancelAddPodcast");
        }

        this.$mdDialog.show(prompt).then(validateAddPodcast, cancelAddPodcast);
    }
}
