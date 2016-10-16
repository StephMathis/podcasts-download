/**
 * Created by amel on 02/10/16.
 */
import {restangularModule} from "../restangular/restangular.module";
import {DownloadTrackerStore} from "./downloadtracker-store";

export const downloadTrackerModule = angular.module('app.common.downloadtracker', [
    restangularModule.name
]);

downloadTrackerModule.service('downloadTrackerStore', DownloadTrackerStore);
