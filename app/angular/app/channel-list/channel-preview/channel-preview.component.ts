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

    constructor(private $state) {
        'ngInject';
    }

}
