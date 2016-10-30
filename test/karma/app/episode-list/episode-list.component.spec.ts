/**
 * Created by amel on 04/10/16.
 */

import * as $ from 'jquery';
import {Episode} from "../../../../app/angular/app/common/episode/episode";
import {episodeListModule} from "../../../../app/angular/app/episode-list/episode-list.module";

fdescribe ('EpisodeListModule', ()=>{

    beforeEach(angular.mock.module(episodeListModule.name));
    beforeEach(angular.mock.module('wishtack.templates'));

    beforeEach(inject((episodeStore,
                       $compile,
                       $q,
                       $rootScope,
                       $templateCache
    ) => {

        this.$compile = $compile;
        this.$q = $q;
        this.$rootScope = $rootScope;
        this.$templateCache = $templateCache;
        this.scope = this.$rootScope.$new();
        this.scope.episodeStore = episodeStore;

        this.$templateCache.put(
            require('../../../../app/angular/app/episode-list/episode-list.component.html'),
            require('!!raw-loader!../../../../app/angular/app/episode-list/episode-list.component.html')
        );

        let episodeJson = {"duration":125,
            "episode_id":"episodeid123",
            "size":114455,
            "source_url":"http://here.dot/aaa.mp3",
            "subtitle":"subtitle episode",
            "title":"title episode"};

        let episode : Episode = new Episode(episodeJson);
        spyOn(this.scope.episodeStore, 'episodeList').and.returnValue(this.$q.resolve([episode]));

    }));


    it('should display episode-list', () => {

        let rawElement;
        let element;

        this.scope.podcastIdInjected = "123456";

        rawElement = this.$compile(`<mh-episode-list mh-podcast-id="podcastIdInjected"></mh-episode-list>`)(this.scope);
        element = $(rawElement);
        this.scope.$apply();

        //expect(element.html()).toEqual("labore eiusmod aliquip consectetur");
        expect(this.scope.episodeStore.episodeList.calls.count()).toBe(1);
        expect(this.scope.episodeStore.episodeList).toHaveBeenCalledWith(this.scope.podcastIdInjected);
    });
})

