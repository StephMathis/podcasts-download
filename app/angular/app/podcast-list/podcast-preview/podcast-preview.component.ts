/**
 * Created by amel on 25/09/16.
 */


export class PodcastPreviewComponent {

    static config = {
        bindings: <any>{
            podcast: '<smPodcast'
        },
        controller: PodcastPreviewComponent,
        templateUrl: require('./podcast-preview.component.html')
    };

    podcast;

}