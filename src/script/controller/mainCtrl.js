angular.module('app').controller('mainCtrl', ['$scope', function($scope) {
	$scope.list = [{
		id: '1',
		name: '销售',
		imgSrc: 'image/company-3.png',
		companuName: '千度',
		city: '上海',
		industry: '互联网',
		time: '2016-06-01 11:05'
	}, {
		id: '2',
		name: 'WEB前端',
		imgSrc: 'image/company-1.png',
		companuName: '幕课网',
		city: '北京',
		industry: '互联网',
		time: '2016-06-01 1:05'
	}]
}])