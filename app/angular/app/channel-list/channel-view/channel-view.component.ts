/**
 * Created by metaheuristic on 25/09/16.
 */

import {Channel} from "../channel/channel";
import {ChannelStore} from "../channel/channel-store";
import {Podcast} from "../../common/podcast/podcast.component";

export class ChannelViewComponent {

    static config = {
        bindings: <any>{
            channel: '<mhChannel'
        },
        controller: ChannelViewComponent,
        templateUrl: require('./channel-view.component.html')
    };

    channel : Channel;

    constructor(private $mdDialog,
                private $scope,
                private $stateParams,
                private channelStore : ChannelStore) {
        'ngInject';
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
                this.channelStore.addPodcast(this.channel, podcastUrl).then(() => {
                    //this.loadChannel();
                });
            }
        }

        let cancelAddPodcast = () => {
            console.log("ChannelViewComponent", "cancelAddPodcast");
        }

        this.$mdDialog.show(prompt).then(validateAddPodcast, cancelAddPodcast);
    }

    removePodcast({podcast} : {podcast: Podcast}) {
        this.channelStore.removePodcast(this.channel.channelId, podcast.podcastId).then(() => {
            //this.loadChannel();
        })
    }
}
