
/**
 * Created by amel on 02/10/16.
 */

export const filesizefilter = ($filter) => {
    return (size) => {
        if (isNaN(size))
            size = 0;

        if (size < 1024)
            return size + ' Bytes';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' Kb';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' Mb';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' Gb';

        size /= 1024;

        return size.toFixed(2) + ' Tb';
    };
};

import {episodeModule} from "../../common/episode/episode.module";
import {EpisodePreviewComponent} from "./episode-preview.component";

export const episodePreviewModule = angular.module('app.episodeList.episodePreview', [
    episodeModule.name
]);

episodePreviewModule.component('mhEpisodePreview', EpisodePreviewComponent.config);
episodePreviewModule.filter('mhFilesize',  filesizefilter);
