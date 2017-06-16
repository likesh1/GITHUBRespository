(function(){
    'use strict';
    angular
        .module('ESODP')
        .controller('AddRepositoriesListController',AddRepositoriesListController);

    AddRepositoriesListController.$inject=['dataService'];

    function AddRepositoriesListController(dataService){
        var addRepositoriesListVm=this;
        addRepositoriesListVm.addRepo=function(){
            console.log(addRepositoriesListVm.repo);
            dataService.addRepo(addRepositoriesListVm.repo);
        }
    }
})();
