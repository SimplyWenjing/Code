var EventUtil = {
	addHandler: function (element,type,handler) {
		if (element.addEventListener) {
			element.addEventListener(type,handler,false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + tye,handler);
		} else {
			element["on" + tyle] = handler;
		}
	},
	removeHandler: function (element,type,handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + tye,handler);
		} else {
			element["on" + tyle] = null;
		}
	}
}