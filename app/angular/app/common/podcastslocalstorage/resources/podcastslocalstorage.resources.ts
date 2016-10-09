/**
 * Created by amel on 03/10/16.
 */
export class PodcastsLocalstorageResources {

    prefix : string;

    constructor(private localStorageService) {

        'ngInject';

        //console.log(this.localStorageService);
        //this.localStorageService.setPrefix('podcasts');
        this.prefix = "podcasts.";

    }

    getPropFullname(prop: string) : string {
        return this.prefix + prop;
    }
    

    setProperty(prop : string, val) {
        let propFullname = this.getPropFullname(prop);
        this.localStorageService.set(propFullname,angular.toJson(val));
    }

    getProperty(prop: string) {
        return angular.fromJson(this.localStorageService.get(this.getPropFullname(prop)));
    }
}

