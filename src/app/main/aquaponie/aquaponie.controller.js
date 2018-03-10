(function ()
{
    'use strict';

    angular
        .module('app.select')
        .controller('AquaponieController', AquaponieController);

    /** @ngInject */
    function AquaponieController($localStorage, $location)
    {
        var vm = this;
        if(!$localStorage.project || $localStorage.project !== "Aquaponie") { $location.path('/select'); }
        
        vm.bulletChart = {
            options: {
                chart: {
                    type              : 'bulletChart',
                    transitionDuration: 500
                }
            },
            data   : {
                'title'   : 'Temperature',
                'subtitle': '°C',
                'ranges'  : [18, 22, 24],
                'measures': [20]
            }
        };

    }
})();
