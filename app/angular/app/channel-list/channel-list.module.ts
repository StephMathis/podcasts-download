/*
 *
 */

import {channelModule} from "./channel/channel.module";
import {ChannelPreviewComponent} from "./channel-preview/channel-preview.component";
import {ChannelViewComponent} from "./channel-view/channel-view.component";
import {ChannelListComponent} from "./channel-list.component";
import {ChannelAddComponent} from "./channel-add/channel-add.component";

export const channelListModule = angular.module('app.channelList', [
    channelModule.name
]);

channelListModule.component('mhChannelList', ChannelListComponent.config);
channelListModule.component('mhChannelView', ChannelViewComponent.config);
channelListModule.component('mhChannelAdd', ChannelAddComponent.config);
channelListModule.component('mhChannelPreview', ChannelPreviewComponent.config);

