/**
 * Created by amel on 25/09/16.
 */


export class PodcastPreviewComponent {

    static config = {
        bindings: <any>{
            podcast: '<mhPodcast'
        },
        controller: PodcastPreviewComponent,
        templateUrl: require('./podcast-preview.component.html')
    };

    podcast;
    hideEpisodes = true;

    constructor(private $mdDialog, private $scope) {
        'ngInject';
    }
    
    toggleEpisodes() {
        this.hideEpisodes = !this.hideEpisodes;
    }

    showEpisodes() {
        console.log("showEpisodes");
        let options = {
            clickOutsideToClose: true,
            scope: this.$scope.$new(),
            template: '<mh-episode-list mh-podcast-id="$ctrl.podcast.podcastId"></mh-episode-list>'
        }

        this.$mdDialog.show(options);
    }

}