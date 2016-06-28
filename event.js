var EventUtil = {
	//添加事件处理程序
	addHandler: function (element,type,handler) {
		if (element.addEventListener) {
			element.addEventListener(type,handler,false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + tye,handler);
		} else {
			element["on" + tyle] = handler;
		}
	},
	//取消事件处理程序
	removeHandler: function (element,type,handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + tye,handler);
		} else {
			element["on" + tyle] = null;
		}
	},
	//获取事件对象
	getEvent: function (event) {
		return event ? event : window.event;
	},
	//获取事件目标对象
	getTarget: function (event) {
		return event.target || event.srcElement;
	},
	//阻止默认行为
	preventDefault: function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;//取消默认行为
		}
	},
	//停止事件冒泡
	stopPropagation: function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancleBubble = true;
		}
	},
	//获取相关元素
	getRelatedTarget: function (event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) {
			return event.toElement;
		} else if (event.fromElement) {
			return event.fromElement;
		} else {
			return null;
		}
	},
	//获取charCode
	getCharCode: function (event) {
		if (typeof event.charCode == "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},
	//剪贴板相关方法
	getClipboardText: function (event) {
		var clipboardData = (event.clipboardData || window.clipboardData);
		return clipboardData.getData("text");
	},
	setClipboardText: function (event) {
		if (event.clipboardData) {
			return event.clipboardData.setData("text/plain",value);
		} else if (window.clipboardData) {
			return window.clipboardData.setData("text",value);
		}
	}
};