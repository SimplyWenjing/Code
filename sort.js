//几种排序算法的封装

var sort = {
	sort: function (array) {
		return array.sort(function (a,b) {
			return a-b;
		});
	},
	bubbleSort: function (array) {
		var len = array.length;
		var i,j,d;
		for(i = 0; i < len; i ++) {
			for(j = i+1; j < len; j ++) {
				if (array[i] > array[j]) {
					d = array[j];
					array[j] = array[i];
					array[i] = d;
				}
			}
		}
		return array;
	}
}
