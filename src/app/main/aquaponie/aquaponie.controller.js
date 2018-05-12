(function ()
{
    'use strict';

    angular
        .module('app.select')
        .controller('AquaponieController', AquaponieController);

    /** @ngInject */
    function AquaponieController($localStorage, $location, api, lastTemp, lastpH, lastTank, allTemp, allTank, allpH)
    {
        var vm = this;
        vm.lastTank = lastTank.feeds[0].field3;
        if(!$localStorage.project || $localStorage.project !== "Aquaponie") { $location.path('/select'); }
        vm.tempData = "";
        for(var i=0; i<allTemp.feeds.length; i++) {
            vm.tempData += String(allTemp.feeds[i].field1);
            if(i!=allTemp.feeds.length - 1) vm.tempData += ",";
        }

        vm.tankData = "";
        for(var i=0; i<allTank.feeds.length; i++) {
            vm.tankData += String(allTank.feeds[i].field3);
            if(i!=allTank.feeds.length - 1) vm.tankData += ",";
        }

        vm.phData = "";
        for(var i=0; i<allpH.feeds.length; i++) {
            vm.phData += String(allpH.feeds[i].field2);
            if(i!=allpH.feeds.length - 1) vm.phData += ",";
        }

        api.getLastTemp.aquaponie.get({},
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
