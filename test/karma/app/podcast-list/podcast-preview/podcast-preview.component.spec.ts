/**
 * Created by amel on 25/09/16.
 */

import * as $ from 'jquery';
import 'angular-material/angular-material-mocks';
import {podcastPreviewModule} from "../../../../../app/angular/app/podcast-list/podcast-preview/podcast-preview.module";
import {PodcastContent, Podcast} from "../../../../../app/angular/app/common/podcast/podcast.component";


fdescribe ('PodcastPreview', ()=>{


    beforeEach(angular.mock.module(podcastPreviewModule.name));
    beforeEach(angular.mock.module('wishtack.templates'));
    beforeEach(angular.mock.module('ngMaterial-mock'));

    beforeEach(() =>{
        angular.mock.module($provide => {
            $provide.value('$mdDialog', {
                show: jasmine.createSpy('show')
            });
        });
        }
    )


    beforeEach(inject(($compile,
                       $rootScope,
                       $templateCache,
                       $mdDialog
                       ) => {

        this.$compile = $compile;
        this.$rootScope = $rootScope;
        this.$templateCache = $templateCache;
        this.$mdDialogMock = $mdDialog;
        this.scope = this.$rootScope.$new();

        this.$templateCache.put(
            require('../../../../../app/angular/app/podcast-list/podcast-preview/podcast-preview.component.html'),
            require('!!raw-loader!../../../../../app/angular/app/podcast-list/podcast-preview/podcast-preview.component.html')
        );
    }));


    it('should display podcast', () => {

        let content = new PodcastContent(
            {
                link: 'http://www.france-info.com/',
                title: 'Chroniques du ciel',
                description: 'podcast description',
                cover_url: 'http://media.radiofrance-podcast.net/podcast09/RF_OMM_0000014223_ITE.jpg'
            }
        )

        let podcastToInject: Podcast;

        podcastToInject = new Podcast({
            content: content,
            podcast_url: "podcast ur",
            podcast_id: "id"
        });

        let rawElement;
        let element;

        this.scope.podcast = podcastToInject;

        rawElement = this.$compile(`<mh-podcast-preview mh-podcast="podcast">`)(this.scope);

        element = $(rawElement);
        this.scope.$apply();

        expect(element.find('.md-title').text()).toEqual('Chroniques du ciel');

    });
})