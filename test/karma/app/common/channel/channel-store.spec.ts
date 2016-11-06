
import {ChannelStore} from '../../../../../app/angular/app/channel-list/channel/channel-store';
import {appModule} from '../../../../../app/angular/app/app.module';

fdescribe('ChannelStore', () => {

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.module((channelStoreProvider) => {}));

    beforeEach(inject(($httpBackend,
                       $rootScope,
                       channelStore) => {
        this.$httpBackend = $httpBackend;
        this.$rootScope = $rootScope;
        this.channelStore= channelStore;
    }));

    it('should load channel list', () => {

        let channelList;


        this.$httpBackend.expectGET('/api/v1/channels').respond({
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

        this.channelStore.loadChannelList().then(_channelList_ => channelList = _channelList_);

        this.$httpBackend.flush();

        expect(channelList.length).toEqual(2);
        expect(channelList[0].id).toEqual('09');
        expect(channelList[0].description).toEqual(undefined);
        expect(channelList[1].id).toEqual('10');
        expect(channelList[1].description).toEqual('TOTO');

    });

});
