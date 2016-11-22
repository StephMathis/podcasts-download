/**
 * Created by amel on 11/11/16.
 */

import {Channel} from "../channel/channel";

export class ChannelEditComponent {

    static config = {
        bindings: <any>{
            channel: '<mhChannel',
            onValidate: '&mhOnValidate',
            onCancel: '&mhOnCancel'

        },
        controller: ChannelEditComponent,
        templateUrl: require('./channel-edit.component.html')
    };

    /* inputs */
    channel: Channel;

    /* ouputs */
    onValidate;
    onCancel;

    /* properties */
    comment: string;
    title: string;
    thumbnail_url: string;

    constructor() {
        'ngInject';
    }

    $onInit() {
        if (this.channel != null) {
            this.comment = this.channel.comment;
            this.title = this.channel.title;
            this.thumbnail_url = this.channel.thumbnail_url;
        }
    }

    $onChange(changes){

    }

    validate() {
        if (this.channel == null) {
            this.channel = new Channel({
                title: this.title,
                comment: this.comment,
                thumbnail_url: this.thumbnail_url
            });            
        } else {
            this.channel.title = this.title;
            this.channel.comment = this.comment;
            this.channel.thumbnail_url = this.thumbnail_url;
        }
        this.onValidate({channel: this.channel});
    }

    cancel() {
        this.onCancel();
    }

}
