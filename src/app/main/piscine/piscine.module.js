(function ()
{
    'use strict';

    angular
        .module('app.piscine', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.piscine', {
                url    : '/piscine',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/piscine/piscine.html',
                        controller : 'PiscineController as vm'
                    }
                },
                resolve  : {
                    lastTemp: function (apiResolver, $stateParams)
                    {
                        return apiResolver.resolve('getLastTemp.piscine@get', {});
                    },
                    lastpH: function (apiResolver, $stateParams)
                    {
                        return apiResolver.resolve('getLastpH.piscine@get', {});
                    }
                }
            });
    }
})();