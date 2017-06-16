(function(){
    'use strict';
    angular
        .module('ESODP')
        .controller('PostPullRequestListController',PostPullRequestListController);

    PostPullRequestListController.$inject=['dataService', '$routeParams'];

    function PostPullRequestListController(dataService, $routeParams){
        var postPullRequestListVm=this;

        console.log($routeParams.param1);
        console.log($routeParams.param2);

        postPullRequestListVm.addPullRequest=function(){
            console.log(postPullRequestListVm);
            dataService.addPullRequest(postPullRequestListVm.pullRequest,$routeParams.param2,$routeParams.param1);
        }
    }

})();