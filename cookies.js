//cookie 的读写
var CookieUtil = {
	get: function (name) {
	//获取cookie
		var cookieName = encodeURIComponent(name) + "=";
		var cookieStart = document.cookie.indexOf(cookieName);
		var cookieValue = null;
		if (cookieStart > -1) {
			var cookieEnd = document.cookie.indexOf(";",cookieStart);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length; 
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
		}
		return cookieValue;
	},
	set: function (name,value) {
		//设置cookie
		var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
		document.cookie = cookieText;
	},
	unset: function (name) {
		//取消cookie
		this.set(name,"");
	}

}