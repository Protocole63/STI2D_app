(function ()
{
    'use strict';

    angular
        .module('app.select', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.select', {
                url    : '/select',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/select/select.html',
                        controller : 'SelectController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'Projets',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.select', {
            title    : 'Projets',
            icon     : 'icon-tile-four',
            state    : 'app.select',
            weight   : 1
        });
    }
})();