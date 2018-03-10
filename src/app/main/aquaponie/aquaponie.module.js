(function ()
{
    'use strict';

    angular
        .module('app.aquaponie', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.aquaponie', {
                url    : '/aquaponie',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/aquaponie/aquaponie.html',
                        controller : 'AquaponieController as vm'
                    }
                },
                resolve  : {
                    lastTemp: function (apiResolver, $stateParams)
                    {
                        return apiResolver.resolve('getLastTemp.aquaponie@get', {});
                    },
                    lastpH: function (apiResolver, $stateParams)
                    {
                        return apiResolver.resolve('getLastpH.aquaponie@get', {});
                    },
                    lastTank: function (apiResolver, $stateParams)
                    {
                        return apiResolver.resolve('getLastTank.aquaponie@get', {});
                    }
                }
            });
    }
})();