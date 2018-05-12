(function ()
{
    'use strict';

    angular
        .module('fuse')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {
        var api = {};

        // Base Url
        api.baseUrl = 'app/data/';
        api.thingSpeak = "https://api.thingspeak.com"


       api.getLastTemp = {
                    aquaponie   : $resource(api.thingSpeak + '/channels/445610/fields/1.json?api_key=F4IJYQKB7BRQ88MX&results=1', {}, {
                        get: {
                              method: 'GET'
                        }
                    }),
                    piscine   : $resource(api.thingSpeak + '/channels/456390/fields/1.json?api_key=1QLNL25U1O46LG8F&results=1', {}, {
                        get: {
                              method: 'GET'
                        }
                    })
        };
       api.getLastpH = {
                    aquaponie   : $resource(api.thingSpeak + '/channels/445610/fields/2.json?api_key=F4IJYQKB7BRQ88MX&results=1', {}, {
                        get: {
                              method: 'GET'
                        }
                    }),
                    piscine   : $resource(api.thingSpeak + '/channels/456390/fields/2.json?api_key=1QLNL25U1O46LG8F&results=1', {}, {
                        get: {
                              method: 'GET'
                        }
                    })
        };
       api.getLastTank = {
                    aquaponie   : $resource(api.thingSpeak + '/channels/445610/fields/3.json?api_key=F4IJYQKB7BRQ88MX&results=1', {}, {
                        get: {
                              method: 'GET'
                        }
                    })
        };

       api.getAllTemp = {
                    aquaponie   : $resource(api.thingSpeak + '/channels/445610/fields/1.json?api_key=F4IJYQKB7BRQ88MX&results=100', {}, {
                        get: {
                              method: 'GET'
                        }
                    }),
                    piscine   : $resource(api.thingSpeak + '/channels/456390/fields/1.json?api_key=1QLNL25U1O46LG8F&results=100', {}, {
                        get: {
                              method: 'GET'
                        }
                    })
        };

       api.getAllTank = {
                    aquaponie   : $resource(api.thingSpeak + '/channels/445610/fields/3.json?api_key=F4IJYQKB7BRQ88MX&results=100', {}, {
                        get: {
                              method: 'GET'
                        }
                    })
        };
       api.getAllpH = {
                    aquaponie   : $resource(api.thingSpeak + '/channels/445610/fields/2.json?api_key=F4IJYQKB7BRQ88MX&results=100', {}, {
                        get: {
                              method: 'GET'
                        }
                    }),
                    piscine   : $resource(api.thingSpeak + '/channels/456390/fields/2.json?api_key=1QLNL25U1O46LG8F&results=100', {}, {
                        get: {
                              method: 'GET'
                        }
                    })
        };
        return api;
    }

})();