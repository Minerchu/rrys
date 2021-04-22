
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+86400000*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});


var stui = {


	'common': {//公共基础
		'history': function() {
			if($("#stui_history").length){
				if($.cookie("recente")){
				    var json=eval("("+$.cookie("recente")+")");
				    var list="<li style='line-height: normal;text-align: right;'><a class='historyclean' title='清空观看记录' style='display: inline-block;line-height: 25px;'> 清空历史 </a></li>";
				    for(i=0;i<json.length;i++){
				        list = list + "<li><a href='"+json[i].vod_url+"' title='"+json[i].vod_name+"'><i>"+json[i].vod_name+"</i><i class=\'right\'>"+json[i].vod_part+"</i></a></li>";
				    }
				    $("#stui_history").append(list);
				}
				else
		            $("#stui_history").append("<center>您的观看历史为空</center>");
			   
			    $(".historyclean").on("click",function(){
			    	$.cookie("recente",null,{expires:-1,path: '/'});
			    });
			}
		}
	}	
};

if(window.console&&window.console.log){  
	console.log('\u4eba\u4eba\u5f71\u89c6');  
	console.log('www.rrys1.com');  
	console.log("\u81ea\u7528\u6a21\u677f\uff0c\u4e0d\u5916\u4f20","color:red");  
}

$(document).ready(function() {	
	stui.common.history();
});
