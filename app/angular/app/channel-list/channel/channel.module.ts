/**
 * Created by metaheuristic on 02/10/16.
 */
import {Channel} from "./channel";
import {restangularModule} from "../../common/restangular/restangular.module";
import {ChannelStore} from "./channel-store";

export const channelModule = angular.module('app.channelList.channel', [
    restangularModule.name
]);

channelModule.service('channelStore', ChannelStore);

