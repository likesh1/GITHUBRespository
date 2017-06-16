/**
 * Created by manoj on 2/19/16.
 */

(function() {
    'use strict';

    angular
        .module('ESODP', ['ngRoute','angular-loading-bar'])
        .config(moduleConfig);

    moduleConfig.$inject=['$routeProvider'];

    function moduleConfig($routeProvider){
        $routeProvider
            .when('/main',{
                templateUrl:'main.tmpl.html',
                controller:'MainListController',
                controllerAs:'mainListVm'
            })
            .when('/user',{
                templateUrl:'user-info.tmpl.html',
                controller:'UserInfoListController',
                controllerAs:'userInfoListVm'
            })
            .when('/repositories',{
                templateUrl:'repositories.tmpl.html',
                controller:'RepositoriesListController',
                controllerAs:'repositoriesListVm'
            })
            .when('/gists',{
                templateUrl:'gists.tmpl.html',
                controller:'GistsListController',
                controllerAs:'gistsListVm'
            })
            .when('/pullRequests',{
                templateUrl:'pullrequest.tmpl.html',
                controller:'PullRequestListController',
                controllerAs:'pullRequestListVm'
            })

            .when('/plain',{
                templateUrl:'plain.tmpl.html',
                controller:'PlainListController',
                controllerAs:'plainListVm'
            })
            .when('/postPullRequest/:param1/:param2',{
                templateUrl:'postPullRequest.tmpl.html',
                controller:'PostPullRequestListController',
                controllerAs:'postPullRequestListVm'
            })
            .when('/postPullRequestListRepos',{
                templateUrl:'postPullRequestListRepos.tmpl.html',
                controller:'RepositoriesListController',
                controllerAs:'repositoriesListVm'
            })
            .when('/postRepositories',{
                templateUrl:'addRepo.tmpl.html',
                controller:'AddRepositoriesListController',
                controllerAs:'addRepositoriesListVm'
            })

            .when('/putPullRequest',{
                templateUrl:'editPullrequest.tmpl.html',
                controller:'EditPullRequestListController',
                controllerAs:'editPullRequestListVm'
            })
            .otherwise({
                redirectTo:'/plain'
            })
    }

})();
