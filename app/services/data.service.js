var ACCESS_TOKEN=accessToken();


(function(){
    angular.module('ESODP').service('dataService',dataService);

    dataService.$inject=['$http','$q','$timeout'];
    function dataService($http,$q,$timeout) {
        var self = this;
        self.getUserInfo = getUserInfo;
        self.getUserRepositories = getUserRepositories;
        self.getUserGists = getUserGists;
        self.getUserPullRequests = getUserPullRequests;
        self.addPullRequest = addPullRequest;
        self.addRepo=addRepo;
        self.editUserPullRequests=editUserPullRequests;

        var responsePullResponse=[];

        function getUserInfo() {
            var defer = $q.defer();
            var url = "https://api.github.com/user?access_token=" + ACCESS_TOKEN;
            console.log(url);
            $http
                .get(url)
                .then(function (response) {
                    defer.resolve(response.data);
                    console.log(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };

        function getUserRepositories() {
            var defer = $q.defer();
            var userDetials = null;
            this.getUserInfo().then(function (response) {
                userDetials = response;
                console.log(userDetials);
                var url = userDetials.repos_url;
                console.log(url);
                $http
                    .get(url)
                    .then(function (response) {
                        defer.resolve(response.data);
                        console.log(response.data);
                    }, function (error) {
                        defer.reject(error.status);
                    });

            }, function (error) {
                console.log(error.data);
            });
            return defer.promise;
        };


        function getUserGists() {
            var defer = $q.defer();
            var gistDetials = null;
            this.getUserInfo().then(function (response) {
                gistDetials = response;
                console.log(gistDetials);
                var url = gistDetials.gists_url;
                console.log(url);
                $http
                    .get(url)
                    .then(function (response) {
                        defer.resolve(response.data);
                        console.log(response.data);
                    }, function (error) {
                        defer.reject(error.status);
                    });

            }, function (error) {
                console.log(error.data);
            });
            return defer.promise;
        };



        function getUserPullRequests() {
            var defer = $q.defer();
            var pullRequest = null;
            var pullRequestUrl=null;
            var pullRequestUrl=["https://api.github.com/repos/torvalds/linux/pulls","https://api.github.com/repos/jquery/jquery/pulls"];
            this.getUserRepositories().then(function (response) {
                pullRequest = response;
                //pullRequestUrl=new Array(response.length);
                //for(var i=0;i<response.length;i++){
                //    console.log(response[i].owner.login);
                //    console.log(response[i].name);
                //    pullRequestUrl[i]="https://api.github.com/repos/"+response[i].owner.login+"/"+response[i].name +"/pulls";
                //}

                for(var i=0;i<pullRequestUrl.length;i++) {
                    console.log(pullRequestUrl[i]);
                }

            }).then(function(){
               // var pullRequestUrl=["https://api.github.com/repos/torvalds/linux/pulls","https://api.github.com/repos/jquery/jquery/pulls"];
                var promises = [];
                for (var i = 0; i < pullRequestUrl.length; i = i + 1) {
                    promises.push($http({method: 'GET', url: pullRequestUrl[i], cache: 'true'}));
                }
                $q.all(promises).then(function(response) {
                    for (var i = 0; i < response.length; i++) {
                        responsePullResponse.push(response[i].data);
                    }
                }).then(function(){
                    console.log(responsePullResponse);
                    defer.resolve(responsePullResponse);
                });
            });
            return defer.promise;
        }


        function editUserPullRequests() {
            var defer = $q.defer();
            var editRequest = null;
            //var editRequestUrl=null;
            var editRequestUrl=["https://api.github.com/repos/torvalds/linux/pulls","https://api.github.com/repos/jquery/jquery/pulls"];
            this.getUserRepositories().then(function (response) {
                editRequest = response;
                //editRequestUrl=new Array(response.length);
                //for(var i=0;i<response.length;i++){
                //    console.log(response[i].owner.login);
                //    console.log(response[i].name);
                //    editRequestUrl[i]="https://api.github.com/repos/"+response[i].owner.login+"/"+response[i].name +"/pulls";
                //}

                for(var i=0;i<editRequestUrl.length;i++) {
                    console.log(editRequestUrl[i]);
                }

            }).then(function(){
                // var editRequestUrl=["https://api.github.com/repos/torvalds/linux/pulls","https://api.github.com/repos/jquery/jquery/pulls"];
                var promises = [];
                for (var i = 0; i < editRequestUrl.length; i = i + 1) {
                    promises.push($http({method: 'GET', url: editRequestUrl[i], cache: 'true'}));
                }
                $q.all(promises).then(function(response) {
                    for (var i = 0; i < response.length; i++) {
                        responsePullResponse.push(response[i].data);
                    }
                }).then(function(){
                    console.log(responsePullResponse);
                    defer.resolve(responsePullResponse);
                });
            });
            return defer.promise;
        }



        function requestMethod(request) {
            $http
                .get(request)
                .then(function(response){
                    console.log(response.data);
                    responsePullResponse.push(response.data);
                });
        }

        function addPullRequest(data,owner,repo) {
            var defer = $q.defer();

            data = {
                "issue":2,
                "head": "manojpammina:master",
                "base": "pr2"
            }

            var pullRequestUrl= "https://api.github.com/repos/"+owner+"/"+repo+"/pulls";

            this.getUserRepositories().then(function (response) {
                console.log(data);
                console.log(pullRequestUrl);
                $http.post(pullRequestUrl, data).success(function (data, status) {
                    console.log("on click event on add pull request button");
                })
            });
        }

        function addRepo(data){
            var defer = $q.defer();
            var userDetials = null;
            this.getUserInfo().then(function (response) {
                userDetials = response;
                console.log(userDetials);
                var url = userDetials.repos_url;
                console.log(url);
                $http.post(url, data).success(function(data, status) {
                    console.log("on click event on add repo button");
                })
            })
        }

    }
})();
