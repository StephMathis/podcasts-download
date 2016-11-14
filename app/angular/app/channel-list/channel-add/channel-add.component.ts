/**
 * Created by amel on 11/11/16.
 */

import {Channel} from "../channel/channel";

export class ChannelAddComponent {

    static config = {
        bindings: <any>{
            onChannelAdd: '&mhOnChannelAdd',
            onCancel: '&mhOnCancel'

        },
        controller: ChannelAddComponent,
        templateUrl: require('./channel-add.component.html')
    };

    channel: Channel;
    comment;
    title;
    onChannelAdd;
    onCancel;

    constructor() {
        'ngInject';
    }


    $onChange(){

    }


    addChannel() {
        this.channel = new Channel({
            title: this.title,
            comment: this.comment
        });
        this.onChannelAdd({channel: this.channel});
    }

    cancel() {
        this.onCancel();
    }

}
