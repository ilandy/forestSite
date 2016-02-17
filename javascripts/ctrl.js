
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',myCtrl);
	
	function myCtrl(){
		var vm = this;
		vm.isActive = false;
		vm.item = proType1.concat(proType2).concat(proType3).concat(proType4);
		vm.item1 = proType1;
		vm.item2 = proType2;
		vm.item3 = proType3;
		vm.item4 = proType4;
		vm.pType = 0;
		vm.pData = {};
		vm.szData = szInfo;
		vm.szImg = vm.szData[0].Pic;

		vm.showSZ = showSZ;
		vm.menuActive = menuActive;
		
		function showSZ (idx){
			vm.szImg = vm.szData[idx].Pic;
		 }
		function menuActive (){
			vm.isActive = !vm.isActive;
		}
	}
})();
