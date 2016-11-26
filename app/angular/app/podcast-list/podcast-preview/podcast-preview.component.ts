/**
 * Created by amel on 25/09/16.
 */

import {Podcast} from "../../common/podcast/podcast.component";

export class PodcastPreviewComponent {

    static config = {
        bindings: <any>{
            podcast: '<mhPodcast',
            onPodcastRemove: '&mhOnPodcastRemove',
            onShowEpisodes: '&mhOnShowEpisodes'
        },
        controller: PodcastPreviewComponent,
        templateUrl: require('./podcast-preview.component.html')
    };


    podcast : Podcast;
    onPodcastRemove;
    onShowEpisodes;

    hideEpisodes = true;

    constructor(private $mdDialog, private $scope) {
        'ngInject';

    }
    
    toggleEpisodes() {
        this.hideEpisodes = !this.hideEpisodes;
    }

    showEpisodes() {
        console.log("showEpisodes");
        this.onShowEpisodes({podcast: this.podcast});
        /*
        let options = {
            clickOutsideToClose: true,
            scope: this.$scope.$new(),
            template: `<form ng-cloak>
                            <md-toolbar scroll>
                                <div class="md-toolbar-tools">
                                    <h2>Episodes</h2>
                                    <span flex></span>
                                    <span flex></span>
                                    <md-button class="md-icon-button" ng-click="$ctrl.cancel()">
                                        <i class="material-icons">close</i>
                                    </md-button>
                                </div>
                            </md-toolbar>
                            <mh-episode-list mh-podcast-id="$ctrl.podcast.podcastId"></mh-episode-list>
                        </form> `
        }

        this.$mdDialog.show(options);
        */

    }

    cancel() {
        this.$mdDialog.cancel();
    }

}