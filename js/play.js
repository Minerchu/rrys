var playerw='100%';//电脑端播放器宽度
var playerh='100%';//电脑端播放器高度
var mplayerw='100%';//手机端播放器宽度
var mplayerh='100%';//手机端播放器高度
var adsPage="";//视频播放前广告页路径
var adsTime=0;//视频播放前广告时间，单位秒
var jxAname="云播放①";
var jxBname="";
var jxCname="";
var jxDname="";
var jxEname="";
var jxAapi="https://j.languang.wfss100.com/?url=";
var jxBapi="";
var jxCapi="";
var jxDapi="";
var jxEapi="";
var forcejx="no";
var unforcejx="yunpan#swf#iframe#url#xigua#ffhd#jjvod";
var unforcejxARR = unforcejx.split('#');


function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
 
var flag = IsPC(); //true为PC端，false为手机端
if(flag==false)
{
	playerw=mplayerw;
	playerh=mplayerh;
}