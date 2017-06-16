/**
 * Created by manoj on 2/18/16.
 */

(function(){
    angular
        .module('ESODP')
        .controller('GistsListController',GistsListController);

    GistsListController.$inject=['dataService'];


    function GistsListController(dataService){

        var gistsListVm=this;
        gistsListVm.data=null;

        dataService
            .getUserGists()
            .then(function(data){
                gistsListVm.data=data;
                console.log('Inside Gists'+ gistsListVm.data)
            },function(error){
                console.log(error.data);
            })
        console.log('GistsListController');
    }

})();