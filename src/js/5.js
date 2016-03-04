/*
* @author: Neurotoxin
* @E-mail: wanghongyu@17guagua.com
* @desc: H5 video player
* @version: 0.0.1
* @date: 2016.02.27
* */

'use strict';

var isMobile = require('./common/navgatorVersion').isMobile.versions.mobile;

var videoH5 = function(obj){
	var option = obj.opt ? obj.opt : {
			'width': '', //播放器宽度
			'height': '', //播放器高度
			'autoplay': false, //是否自动播放
			'controls': true, //是否显示默认控制菜单
			'loop': false, //是否循环播放
			'preload': false, //是否预加载视频
			'poster': 'img/static/poster.jpg' //设置未播放时显示的图片
		};
	this.p = $(obj.video);
	this.v = document.getElementById((obj.video + '').replace(/#/,''));s
	this.b = $(obj.button);
	this.init(option);
};

videoH5.prototype = {
	p: '',
	b: '',
	v: '',
	init: function(option){
		var that = this;
		for(var k in option){
			if(option[k] != false && option[k] != ''){
				that.p.attr(k, option[k]);
			}
		}
		that.playNpause();
	},
	playNpause: function(){
		var that = this;
		that.b.on('click', function(){
			if(!that.b.hasClass('pause')){
				that.b.addClass('pause');
				that.v.play();
			}else{
				that.b.removeClass('pause');
				that.v.pause();
			}
		});
	},
	volume: function(vo){ /*设置或返回播放器音量,范围0~1*/
		if(vo){
			this.v.volume = vo;
			return this;
		}else{
			return this.v.volume;
		}
	},
	duration: function(){ /*返回视频时长,单位为秒*/
		return this.v.duration;
	},
	currentTime: function(ct){ /*设置或返回视频当前播放位置,单位为秒*/
		if(ct){
			this.v.currentTime = ct;
			return this;
		}else{
			return this.v.currentTime;
		}
	}
};

var videoPlayer = new videoH5({'video': '#video-player','button': '#play-button'});
/*video为<video>的id,button为播放暂停按钮的id,opt为自定义播放器的选项对象,如果不需要自定义,不填写即可*/
videoPlayer.volume('0');
videoPlayer.currentTime('30');
console.log(videoPlayer.duration());
/*实例化后的对象具有一些方法,且在状态为设置参数时支持链式调用,具体请参考手册*/
/*由于浏览器差异以及系统安全设置不同,video对象下的方法会无法使用*/
