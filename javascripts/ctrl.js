
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',myCtrl);

	function myCtrl(){

		var vm = this;
		vm.isActive = false,
		vm.item = productInfo,
		vm.pType = 0,
		vm.pData = {},
		vm.szData = szInfo,
		vm.szImg = vm.szData[0].Pic;


		vm.seeMore = function(idx){
			vm.pData = {
				"Name" : vm.item[idx].Name,
				"Pic": vm.item[idx].Pic,
			 	"Discription": vm.item[idx].Discription,
			 	"OtherImg": vm.item[idx].OtherImg,
			 	"ProContent": function(){
			 		if(vm.item[idx].OtherImg.length !== 0){
			 			return 'col-md-5';
			 		}else{
			 			return 'col-md-12';
			 		}
			 	}
			}
		}
		vm.showSZ = function(idx){
			vm.szImg = vm.szData[idx].Pic;
		 }
		vm.menuActive = function(){
			vm.isActive = !vm.isActive;
		}
	}

		
		
})();
