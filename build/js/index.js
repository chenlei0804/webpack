
angular.module('app',['ui.router'])


angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	}).state('position',{
		url:'/position/:id',
		templateUrl:'view/position.html',
		controller:'positionCtrl'
	}).state('company',{
		url:'/company/:id',
		templateUrl:'view/company.html',
		controller:'companyCtrl'
	})
	$urlRouterProvider.otherwise('main')
}])
angular.module('app').controller('companyCtrl', ['$scope', function($scope) {
	
}])
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('/data/positionList.json').then(function(res) {
		console.log(res.data)
		$scope.list = res.data;
	});
}])
angular.module('app').controller('positionCtrl', ['$scope', function($scope) {}])
angular.module('app').directive('appCompany',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/company.html'
	}
}])
angular.module('app').directive('appFoot',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/foot.html'
	}
}])
angular.module('app').directive('appHead',[function(){
	
	return {
		
		restrict:'A',
		replace:true,
		templateUrl:'view/template/head.html'
	}
}])
angular.module('app').directive('appHeadBar', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/headBar.html',
		scope: {
			text: '@'
		},
		link: function($scope) {
			$scope.back = function() {
				window.history.back();
			}
		}
	}
}])
angular.module('app').directive('appPositionClass',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionClass.html'
	}
}])
angular.module('app').directive('appPositionInfo',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionInfo.html',
		scope:{
			isActive:'='
		},
		link:function($scope){
			$scope.imagePath = $scope.isActive?'image/star-active.png':'image/star.png'
		}
	}
}])
angular.module('app').directive('appPositionList',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionList.html',
		scope:{
			data:'='
		}
	}
}])