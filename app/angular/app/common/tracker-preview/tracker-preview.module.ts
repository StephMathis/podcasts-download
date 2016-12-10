/**
 * Created by amel on 14/10/16.
 */

import {TrackerPreviewComponent} from "./tracker-preview.component";
import {downloadTrackerModule} from "../downloadtracker/downloadtracker.module";

export const trackerPreviewModule = angular.module('app.trackerList.trackerPreview', [
    downloadTrackerModule.name
]);

trackerPreviewModule.component('mhTrackerPreview', TrackerPreviewComponent.config);