/**
 * Created by manoj on 2/17/16.
 */


(function(){
    angular
        .module('ESODP')
        .controller('UserInfoListController',UserInfoListController);

    UserInfoListController.$inject=['dataService'];

    function UserInfoListController(dataService){

        var userInfoListVm=this;
        userInfoListVm.data=null;

        dataService
            .getUserInfo()
            .then(function(data){
                userInfoListVm.data=data;
                console.log('Inside UserInfo'+ userInfoListVm.data)
            },function(error){
                console.log(error.data);
            })
        console.log('UserInfoListController');
    }

})();
