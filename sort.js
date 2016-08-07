//几种排序算法的封装

var sort = {
	sort: function (array) {
		return array.sort(function (a,b) {
			return a-b;
		});
	},
	//冒泡排序，依次比较前后两个，大的放在后面，时间复杂度 n的平方
	bubbleSort: function (array) {
		var len = array.length;
		var i,j,d;
		for(i = 0; i < len; i ++) {
			for(j = 1; j < len-i; j ++) {
				if (array[j-1] > array[j]) {
					d = array[j];
					array[j] = array[j-1];
					array[j-1] = d;
				}
			}
		}
		return array;
	},
	//快速排序
	quickSort: function (array) {
		if (len <= 1) {
			return array;
		}
		var pivot    = array[0];
		var len      = array.length;
		var leftArr  = [];
		var rightArr = [];
		for(var i = 1; i < len; i ++) {
			if (array[i] < pivot) {
				leftArr.push(array[i]);
			} else {
				rightArr.push(array[i]);
			}
		}
		return arguments.callee(leftArr).concat(pivot,arguments.callee(rightArr));
	}

}
