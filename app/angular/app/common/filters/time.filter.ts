/**
 * Created by amel on 10/10/16.
 */


export const timefilter = ($filter) => {
    return (seconds) => {
        return $filter('date')(new Date(0,0,0).setSeconds(seconds), 'HH:mm:ss');
    };
};
