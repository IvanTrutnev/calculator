'use strict';

angular.module('calculator.calc',[])
    .controller('calcCtrl',['$scope','dataService',function($scope,dataService) {
        $scope.productData = dataService.database;

        $scope.index = 2;


        $scope.test = function(idx) {
            $scope.index = $scope.productData.indexOf(idx);
        }
    }
])
.factory('dataService',
    ['$http', function($http) {
        return {
            database: [
                {
                    name: '97x97x4000 | brusas',
                    thickness: 97,
                    width: 97,
                    length: 4000,
                    real_thickness: 91,
                    real_width: 91,
                    real_length: 4000,
                    m_3: 27,
                    push_price: 125,
                    deffect: 0,
                    deffect_cost: 0,
                    logistci_lt: 500
                },
                {
                name: '75x75x4000 | brusas',
                    thickness: 75,
                    width: 75,
                    length: 4000,
                    real_thickness: 70,
                    real_width: 70,
                    real_length: 4000,
                    m_3: 27,
                    push_price: 125,
                    deffect: 0,
                    deffect_cost: 0,
                    logistci_lt: 500
                },
                {
                    name: '16x100x4000 | lentele',
                    thickness: 16,
                    width: 100,
                    length: 4000,
                    real_thickness: 14,
                    real_width: 95,
                    real_length: 4000,
                    m_3: 27,
                    push_price: 130,
                    deffect: 0,
                    deffect_cost: 0,
                    logistci_lt: 500
                },
                {
                    name: '19x100x4000 | brusas',
                    thickness: 19,
                    width: 100,
                    length: 4000,
                    real_thickness: 17,
                    real_width: 95,
                    real_length: 4000,
                    m_3: 27,
                    push_price: 95,
                    deffect: 0,
                    deffect_cost: 0,
                    logistci_lt: 450
                },
                {
                    name: '25x100x4000 | brusas',
                    thickness: 25,
                    width: 100,
                    length: 4000,
                    real_thickness: 22,
                    real_width: 95,
                    real_length: 4000,
                    m_3: 27,
                    push_price: 95,
                    deffect: 0,
                    deffect_cost: 0,
                    logistci_lt: 450
                }
            ]
        };
    }]);