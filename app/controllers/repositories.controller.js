/**
 * Created by manoj on 2/17/16.
 */

(function(){
    angular
        .module('ESODP')
        .controller('RepositoriesListController',RepositoriesListController);

    RepositoriesListController.$inject=['dataService'];

    function RepositoriesListController(dataService){

        var repositoriesListVm=this;
        repositoriesListVm.data=null;

        dataService
            .getUserRepositories()
            .then(function(data){
                repositoriesListVm.data=data;
                console.log('Inside repoitories'+ repositoriesListVm.data)
            },function(error){
                console.log(error.data);
            })
        console.log('RepositoriesListController');
    }

})();