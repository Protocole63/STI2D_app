(function ()
{
    'use strict';

    angular
        .module('app.select')
        .controller('SelectController', SelectController);

    /** @ngInject */
    function SelectController($localStorage, $location)
    {
        var vm = this;
        vm.selectProject = selectProject;




        function selectProject(project) {
            switch(project){
                case 'Aquaponie':
                    $localStorage.project = "Aquaponie";
                    $location.path('/aquaponie');
                    break;
                case 'Piscine':
                    $localStorage.project = "Piscine";
                    $location.path('/piscine');
                    break;
                default:
                    $localStorage.project = "Aquaponie";
                    $location.path('/aquaponie');
            }
        }

    }
})();
