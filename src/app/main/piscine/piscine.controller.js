(function ()
{
    'use strict';

    angular
        .module('app.select')
        .controller('PiscineController', PiscineController);

    /** @ngInject */
    function PiscineController($localStorage, $location, api, lastTemp, lastpH)
    {
        var vm = this;
        if(!$localStorage.project || $localStorage.project !== "Piscine") { $location.path('/aquaponie'); }
        api.getLastTemp.piscine.get({},
            function(response) {
                return vm.lastTemp = response.feeds[0].field1;
            },
            function(response) {
                console.log(response);
        });
        vm.temp = {
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
                'measures': [parseInt(lastTemp.feeds[0].field1)]
            }
        };

        vm.ph = {
            options: {
                chart: {
                    type              : 'bulletChart',
                    transitionDuration: 500
                }
            },
            data   : {
                'title'   : 'Acidité Eau',
                'subtitle': 'pH',
                'ranges'  : [7, 7, 8],
                'measures': [parseInt(lastpH.feeds[0].field2)]
            }
        };
    }
})();
