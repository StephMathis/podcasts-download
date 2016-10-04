/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {UserStore} from '../../../../../app/angular/app/common/user/user-store';
import {User} from '../../../../../app/angular/app/common/user/user';
import {appModule} from '../../../../../app/angular/app/app.module';

describe('UserStore', () => {

    beforeEach(angular.mock.module(appModule.name));

<<<<<<< HEAD
    beforeEach(angular.mock.module((userStoreProvider) => {}));

    beforeEach(inject(($httpBackend,
                       $rootScope,
                       userStore) => {
        this.$httpBackend = $httpBackend;
        this.$rootScope = $rootScope;
        this.userStore= userStore;
    }));

    it('should load user list', () => {

        let userList;
        let userStore = this.userStore;
=======
    beforeEach(inject(($rootScope,
                       userStore) => {
        this.$rootScope = $rootScope;
        this.userStore = userStore;
    }));

    it('should add users', () => {

        let userList: User[];
        let userStore: UserStore = this.userStore;
>>>>>>> 37143d94446aa20abe4a29c4f9dd6f22bc751758

        let user1 = new User({firstName: 'Foo', lastName: 'BAR'});
        let user2 = new User({firstName: 'John', lastName: 'BAR'});
        let user3 = new User({firstName: 'Foo', lastName: 'BAR'});

<<<<<<< HEAD
        this.$httpBackend.expectGET('/api/v1/users/').respond({
            meta: {
                count: 2
            },
            objects: [
                {
                    firstName: 'Foo'
                },
                {
                    firstName: 'John',
                    lastName: 'BAR',
                }
            ]
        });

        userStore.userList().then(_userList_ => userList = _userList_);

        this.$httpBackend.flush();

        expect(userList.length).toEqual(2);
        expect(userList[0].firstName).toEqual('Foo');
        expect(userList[0].lastName).toEqual(undefined);
        expect(userList[1].firstName).toEqual('John');
        expect(userList[1].lastName).toEqual('BAR');
=======
        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userStore.userList().then(_userList_ => userList = _userList_);

        this.$rootScope.$apply();

        expect(userList.length).toEqual(3);
        expect(userList[0].firstName).toEqual('Foo');
        expect(userList[0].lastName).toEqual('BAR');
        expect(userList[1].firstName).toEqual('John');
        expect(userList[1].lastName).toEqual('BAR');
        expect(userList[2].firstName).toEqual('Foo');
        expect(userList[2].lastName).toEqual('BAR');
>>>>>>> 37143d94446aa20abe4a29c4f9dd6f22bc751758

    });

});
