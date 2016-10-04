
import {PodcastStore} from '../../../../../app/angular/app/common/podcast/podcast-store';
import {appModule} from '../../../../../app/angular/app/app.module';

xdescribe('PodcastStore', () => {

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.module((podcastStoreProvider) => {}));

    beforeEach(inject(($httpBackend,
                       $rootScope,
                       podcastStore) => {
        this.$httpBackend = $httpBackend;
        this.$rootScope = $rootScope;
        this.podcastStore= podcastStore;
    }));

    it('should load podcast list', () => {

        let podcastList;
        let podcastStore = this.podcastStore;


        this.$httpBackend.expectGET('/api/v1/podcasts/').respond({
            objects: [
                {
                    id: '09'
                },
                {
                    id: '10',
                    description: 'TOTO',
                }
            ]
        });

        podcastStore.podcastList().then(_podcastList_ => podcastList = _podcastList_);

        this.$httpBackend.flush();

        expect(podcastList.length).toEqual(2);
        expect(podcastList[0].id).toEqual('09');
        expect(podcastList[0].description).toEqual(undefined);
        expect(podcastList[1].id).toEqual('10');
        expect(podcastList[1].description).toEqual('TOTO');

    });

});
