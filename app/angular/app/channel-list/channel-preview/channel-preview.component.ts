/**
 * Created by metaheuristic on 25/09/16.
 */

import {Channel} from "../channel/channel";
import {ChannelStore} from "../channel/channel-store";

export class ChannelPreviewComponent {

    static config = {
        bindings: <any>{
            channel: '<mhChannel',
            onChannelRemove: '&mhOnChannelRemove',
            onChannelClick: '&mhOnChannelClick'
        },
        controller: ChannelPreviewComponent,
        templateUrl: require('./channel-preview.component.html')
    };

    channel : Channel;
    onChannelRemove;
    onChannelClick;

    constructor(private $scope, private $mdDialog, private channelStore: ChannelStore) {
        'ngInject';
    }

     showRemoveChannelConfirmModal(event) {
         let options = {
            scope: this.$scope.$new(),
            title: 'Etes vous sûr de vouloir supprimer cette chaîne?',
            targetEvent: event,
            ok: 'Confirmer',
            cancel: 'En fin de compte, j\'ai changé d\'avis, je la garde!'
         }
         let confirm = this.$mdDialog.confirm(options);

         let validateRemoveChannel = () => {
             this.onChannelRemove({channel: this.channel});
         }


         let cancelRemoveChannel = () => {
             this.$mdDialog.cancel();
         }

     this.$mdDialog.show(confirm).then(validateRemoveChannel, cancelRemoveChannel);
     }

    showEditChannelPrompt(event) {
        let options = {
            clickOutsideToClose: true,
            scope: this.$scope.$new(),
            template: `<mh-channel-edit 
                            mh-channel="$ctrl.channel"
                            mh-on-validate="$ctrl.validateEditChannel({channel: channel})"
                            mh-on-cancel="$ctrl.cancelEditChannel()">
                       </mh-channel-edit>`
        }

        this.$mdDialog.show(options);
    }

    validateEditChannel({channel} : {channel: Channel}) {
        this.$mdDialog.cancel();
        console.log("ChannelPreviewComponent validateEditChannel", channel);
        if (channel !== undefined) {
            this.channelStore.updateChannel(channel).then(() => {
                console.log("now i have to refresh preview");
                this.channelStore.loadChannel(channel.channelId).then((channel) => {
                    this.channel = channel;
                });
            });
        }        
    }

    cancelEditChannel() {
        this.$mdDialog.cancel();        
    }

}
