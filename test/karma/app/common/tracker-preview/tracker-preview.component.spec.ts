/**
 * Created by amel on 16/10/16.
 */

import * as angular from 'angular';

import * as $ from 'jquery';
import {trackerPreviewModule} from "../../../../../app/angular/app/common/tracker-preview/tracker-preview.module";
import 'restangular';
import {Tracker} from "../../../../../app/angular/app/common/downloadtracker/tracker";


describe ('TrackerPreview', ()=>{

    beforeEach(angular.mock.module(trackerPreviewModule.name));
    beforeEach(angular.mock.module('wishtack.templates'));

    beforeEach(inject(($compile,
                       $http,
                       $q,
                       $rootScope,
                       $templateCache,
                       trackerStore) => {

        this.$compile = $compile;
        this.$q = $q;
        this.$rootScope = $rootScope;
        this.$templateCache = $templateCache;
        this.scope = this.$rootScope.$new();

    }));

    it('should display tracker', () => {

        let rawElement;
        let element;


        spyOn(this.trackerStore, 'tracker').and.returnValue(this.$q.resolve(
            new Tracker({
                status: "NotStarted",
                tracker_id: "1234"
            })
        ));

        rawElement = this.$compile(`<mh-tracker-preview mh-tracker="1234">`)(this.scope);
        element = $(rawElement);

        this.scope.$apply();

        console.log(element.html());

        expect(element.find('.tracker-preview-status').text()).toContain('Not_Started');


    });
})
