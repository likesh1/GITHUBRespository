/**
 * Created by manoj on 2/18/16.
 */
(function(){
    angular
        .module('ESODP')
        .controller('PullRequestListController',PullRequestListController);

    PullRequestListController.$inject=['dataService'];

    function PullRequestListController(dataService){

        var pullRequestListVm=this;
        pullRequestListVm.pullRequest=[];
        var tempPullRequestListVm=null;
        var tempObjectArray=null;
        var finalObjectArray=null;


        dataService
            .getUserPullRequests()
            .then(function(data){
                tempPullRequestListVm=data;
                console.log('Inside pullrequests'+ tempPullRequestListVm);
                for(var i=0;i<tempPullRequestListVm.length;i++){
                     tempObjectArray=tempPullRequestListVm[i];
                    for(var j=0;j<tempObjectArray.length;j++){
                        finalObjectArray={
                           url:tempObjectArray[j].url,
                           number:tempObjectArray[j].number,
                           created_at:tempObjectArray[j].created_at,
                           updated_at:tempObjectArray[j].updated_at,
                           state:tempObjectArray[j].state
                       }
                        pullRequestListVm.pullRequest.push(finalObjectArray);
                    }
                }
                for(var i=0;i<pullRequestListVm.pullRequest.length;i++){
                    console.log(pullRequestListVm.pullRequest[i]);
                }
            },function(error){
                console.log(error.data);
            });
        console.log('PullRequestListController');


}})();