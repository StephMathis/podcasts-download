/**
 * Created by metaheuristic on 25/09/16.
 */

import {Channel} from "../channel/channel";

export class ChannelPreviewComponent {

    static config = {
        bindings: <any>{
            channel: '<mhChannel',
            onChannelRemove: '&mhOnChannelRemove'
        },
        controller: ChannelPreviewComponent,
        templateUrl: require('./channel-preview.component.html')
    };

    channel : Channel;
    onChannelRemove;

    constructor(private $scope, private $mdDialog) {
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

}
