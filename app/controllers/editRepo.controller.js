/**
 * Created by manoj on 2/18/16.
 */
(function(){
    angular
        .module('ESODP')
        .controller('EditPullRequestListController',EditPullRequestListController);

    EditPullRequestListController.$inject=['dataService'];

    function EditPullRequestListController(dataService){

        var editPullRequestListVm=this;
        editPullRequestListVm.pullRequest=[];
        var tempPullRequestListVm=null;
        var tempObjectArray=null;
        var finalObjectArray=null;


        dataService
            .editUserPullRequests()
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
                        editPullRequestListVm.pullRequest.push(finalObjectArray);
                    }
                }
                for(var i=0;i<editPullRequestListVm.pullRequest.length;i++){
                    console.log(editPullRequestListVm.pullRequest[i]);
                }
            },function(error){
                console.log(error.data);
            });
        console.log('EditPullRequestListController');


    }})();