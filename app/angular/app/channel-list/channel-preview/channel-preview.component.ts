/**
 * Created by amel on 25/09/16.
 */


export class ChannelPreviewComponent {

    static config = {
        bindings: <any>{
            channel: '<mhChannel'
        },
        controller: ChannelPreviewComponent,
        templateUrl: require('./channel-preview.component.html')
    };

    channel;

    constructor(private $scope) {
        'ngInject';
    }
}
