'use strict';

angular.module('calculator.calc',[])
    .controller('calcCtrl',['$scope','dataService',function($scope,dataService) {

        $scope.productData = dataService.database;
        $scope.index = 0;
        $scope.tableFlag = false;
        $scope.commision = 0;

        $scope.changeValue = function(key, value, index) {
            $scope.productData[index][key] = Number(value);
        };

        $scope.rows = {
            name: 'Название и размер (продаваемого продукта)',
            thickness: ['Толщина (продаваемого продукта)','mm'],
            width: ['Ширина (продаваемого продукта)','mm'],
            length: ['Длинна (продаваемого продукта)','mm'],
            real_thickness: ['Толщина (закупаемого продукта)','mm'],
            real_width: ['Ширина (закупаемого продукта)','mm'],
            real_length: ['Длинна (закупаемого продукта)','mm'],
            m_3: ['Кубатура загружаемая в авто в Литву','m3'],
            push_price: ['Закупочная цена','EUR'],
            deffect: ['Деффект % (закупаемого продукта)','%'],
            deffect_cost: ['Цена деффекта (закупаемого продукта)','EUR'],
            logistic_lt: ['Транспорт в Литву','EUR'],
            commission: ['Комиссионные','EUR/m3'],
        };

        $scope.getFullPurchasePrice = function(index) {
            let currentProduct = $scope.productData[index];
            let m_3 = currentProduct.m_3,
                push_price = currentProduct.push_price,
                deffect = currentProduct.deffect,
                deffect_cost = currentProduct.deffect_cost,
                logistic_lt = currentProduct.logistic_lt,
                commision = currentProduct.commission;
            $scope.fullPurhcasePrice = (m_3 * push_price*(100-deffect)/100
            + m_3* deffect_cost*deffect/100
            + logistic_lt
            + commision * m_3).toFixed(2);
            $scope.priceOfVolume = ($scope.fullPurhcasePrice / currentProduct.m_3).toFixed(2);
        };

        $scope.changeProduct = function(idx) {
            $scope.index = $scope.productData.indexOf(idx);
            $scope.tableFlag = true;
            $scope.getFullPurchasePrice($scope.index);
        }
    }
])
.factory('dataService',
    [function() {
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
                    logistic_lt: 500,
                    commission: 0,
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
                    logistic_lt: 500,
                    commission: 0,
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
                    logistic_lt: 500,
                    commission: 0,
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
                    logistic_lt: 450,
                    commission: 0,
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
                    logistic_lt: 450,
                    commission: 0,
                }
            ]
        };
    }]);


