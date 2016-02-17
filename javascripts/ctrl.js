
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

		vm.seeMore = seeMore;
		vm.showSZ = showSZ;
		vm.menuActive = menuActive;
		vm.getFloor = getFloor;
		vm.ProConVisble = ProConVisble;

		function seeMore(idx){
			vm.pData = {
				"Name" : vm.item[idx].Name,
				"Pic": vm.item[idx].Pic,
			 	"Discription": vm.item[idx].Discription,
			 	"OtherImg": vm.item[idx].OtherImg,
			 	"ProConVisble" : true ,
			 	"ProContent": function(){
			 		if(vm.item[idx].OtherImg.length !== 0){
			 			return 'col-md-5';
			 		}else{
			 			return 'col-md-12 two-row';
			 		}
			 	},
			 	"ContentIndex": Math.floor(idx / 3)
			}

		}
		function showSZ (idx){
			vm.szImg = vm.szData[idx].Pic;
		 }
		function menuActive (){
			vm.isActive = !vm.isActive;
		}
		function getFloor (num){
			return Math.floor(num);
		}
		function ProConVisble (clkCtrl,idx){
			if(clkCtrl == true && vm.pData.ContentIndex == vm.getFloor(idx/3)){
				return true
			}
		}
	}
})();
