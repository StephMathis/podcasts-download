/**
 * Created by amel on 11/11/16.
 */

import {Channel} from "../channel/channel";

export class ChannelAddComponent {

    static config = {
        bindings: <any>{
            onChannelAdd: '&mhOnChannelAdd'

        },
        controller: ChannelAddComponent,
        templateUrl: require('./channel-add.component.html')
    };

    channel: Channel;
    comment;
    title;
    onChannelAdd;

    constructor() {
        'ngInject';
    }


    $onChange(){

    }


    addChannel({channel}: {channel: Channel}) {
        this.channel = new Channel({
            title: this.title,
            comment: this.comment
        });
        this.onChannelAdd({channel: this.channel});
    }

}
