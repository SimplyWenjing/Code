var EventUtil={  
            //添加句柄  
            addHandler:function(elem,type,handler){  
                if (elem.addEventListener) {  
                    elem.addEventListener(type,handler,false);  
                } else if(elem.attachEvent){  
                    elem.attachEvent("on"+type,handler);  
                }else{  
                    elem["on"+type]=handler;  
                }  
            },  
            //删除句柄  
            removeHandler:function(elem,type,handler){  
                if (ele.removeEventListener) {  
                    elem.removeEventListener(type,handler,false);  
                } else if(elem.detachEvent){  
                    elem.detachEvent("on"+type,handler);  
                }else{  
                    elem["on"+type]=null;  
                }  
            },  
            //获取事件  
            getEvent:function(event){  
                return event?event:window.event;  
            },  
            getTarget:function(event){  
                return event.target||event.srcElement;  
            } ,
            //阻止事件的默认行为  
            preventDefault:function(event){  
                if(event.preventDefault){  
                    event.preventDefault();  
                }else{  
                    event.returnValue=false;  
                }  
            },  
            //阻止事件的默认行为  
            stopPropagation:function(event){  
                if(event.stopPropagation){  
                    event.stopPropagation();  
                }else{  
                    event.cannelBubble=true;  
                }  
            }  
        }  
/*============向URL末尾添加查询字符串=============*/
function addURLParam (url,name,value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURLComponent(name) + "=" +encodeURLComponent(value);
    return url;
}
/*========================跨浏览器的CORS=======================*/
function createCORSRequest (method,url) {
    var xhr = createXHR();
    if ("withCredentails" in xhr) {
        xhr.open(method,url,true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method,url);
    } else {
        xhr = null;
    }
    return xhr;    
}
/*=====================使用XHT对象实现HTTP流=======================*/
function createStreamingClient (url,progress,finished) {
    var xhr = new XMLHttpRequest();
    var received = 0;
    xhr.open("get",url,true);
    xhr.onreadystatechange = function () {
        var result;
        if (xhr.readyState == 3) {
            //只取得最近数据并调整计数器
            result = xhr.responseText.substring(received);
            received += result.length;

            //调用progress函数
            progress(result);
        } else if (xhr.readyState == 4) {
            finished(xhr.responseText);
        }
    }
    xhr.send(null);
    return xhr;
}