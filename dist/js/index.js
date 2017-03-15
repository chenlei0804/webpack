angular.module("app",["ui.router"]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}).state("position",{url:"/position/:id",templateUrl:"view/position.html",controller:"positionCtrl"}),e.otherwise("main")}]),angular.module("app").controller("mainCtrl",["$scope",function(t){t.list=[{id:"1",name:"销售",imgSrc:"image/company-3.png",companuName:"千度",city:"上海",industry:"互联网",time:"2016-06-01 11:05"},{id:"2",name:"WEB前端",imgSrc:"image/company-1.png",companuName:"幕课网",city:"北京",industry:"互联网",time:"2016-06-01 1:05"}]}]),angular.module("app").controller("positionCtrl",["$scope",function(t){}]),angular.module("app").directive("appFoot",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/foot.html"}}]),angular.module("app").directive("appHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]),angular.module("app").directive("appHeadBar",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/headBar.html",scope:{text:"@"},link:function(t){t.back=function(){window.history.back()}}}}]),angular.module("app").directive("appPositionInfo",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionInfo.html",scope:{isActive:"="},link:function(t){t.imagePath=t.isActive?"image/star-active.png":"image/star.png"}}}]),angular.module("app").directive("appPositionList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionList.html",scope:{data:"="}}}]);