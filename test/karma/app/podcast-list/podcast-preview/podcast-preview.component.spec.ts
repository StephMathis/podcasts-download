/**
 * Created by amel on 25/09/16.
 */

import * as $ from 'jquery';
import {podcastPreviewModule} from "../../../../../app/angular/app/podcast-list/podcast-preview/podcast-preview.module";
import {PodcastContent, Podcast} from "../../../../../app/angular/app/common/podcast/podcast.component";


describe ('PodcastPreview', ()=>{

    beforeEach(angular.mock.module(podcastPreviewModule.name));

    beforeEach(inject(($compile,
                       $http,
                       $q,
                       $rootScope,
                       $templateCache,
                       podcastStore) => {

        this.$compile = $compile;
        this.$q = $q;
        this.$rootScope = $rootScope;
        this.$templateCache = $templateCache;
        this.scope = this.$rootScope.$new();

            }));

    it('should display podcast', () => {

        let content = new PodcastContent(
            {
                'link': 'http://www.france-info.com/',
                'title': 'Chroniques du ciel',
                'description': "Chaque dimanche, toute l'actualitÃ© Ã©conomique des compagnies aÃ©riennes, des constructeurs et des aÃ©roports, mais aussi les nouvelles technologies, les sports, l'aviation lÃ©gÃ¨re, le vol libre.",
                'cover_url': 'http://media.radiofrance-podcast.net/podcast09/RF_OMM_0000014223_ITE.jpg'
            }
        )

        let podcast = new Podcast({
            "content": content,
            "podcast_url": null,
            "resource_uri": "/api/v1/podcasts/aHR0cDovL3JhZGlvZnJhbmNlLXBvZGNhc3QubmV0L3BvZGNhc3QwOS9yc3NfMTg5OTYueG1s/"
        });


        let rawElement;
        let element;

        this.scope.podcast = podcast;

        rawElement = this.$compile(`<sm-podcast-preview sm-podcast="podcast">`)(this.scope);
        element = $(rawElement);

        this.scope.$apply();

        console.log(element.html());

        expect(element.find('.podcast-preview-title').text()).toEqual('Chroniques du ciel');


    });
})
