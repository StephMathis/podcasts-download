/**
 * Created by amel on 10/10/16.
 */


export const timefilter = ($filter) => {
    return (seconds) => {
        let format : string = 'mm:ss';
        if (seconds >= 3600) {
            format = 'HH:mm:ss';
        }
        return $filter('date')(new Date(0,0,0).setSeconds(seconds), format);
    };
};
