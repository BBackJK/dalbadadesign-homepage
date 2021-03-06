"use strict";!function(o){
	o.scrollToTop=function(t,
	n){
		function i(){
			var t={
				"background-position":"0% 0%",
				"background-size":"auto",
				"background-image":"none",
				"background-repeat":"repeat"

			},
			n={
				display:"none",
				position:"fixed",
				"z-index":r.options.zIndex,
				top:r.options.top+"px",
				left:r.options.left+"px",
				bottom:r.options.bottom+"px",
				right:r.options.right+"px",
				width:r.options.size+"px",
				height:r.options.size+"px",
				borderRadius:r.options.borderRadius+"px",
				"background-color":r.options.bgColor,
				"background-position":r.options.bgPosition,
				"background-image":r.options.bgImage,
				"background":r.options.bgImg,
				"background-size":r.options.bgSize,
				"background-repeat":"no-repeat",
				WebkitTransition:"background-color "+r.options.hoverDuration+"ms linear",
				MozTransition:"background-color "+r.options.hoverDuration+"ms linear",
				MsTransition:"background-color "+r.options.hoverDuration+"ms linear",
				OTransition:"background-color "+r.options.hoverDuration+"ms linear",
				transition:"background-color "+r.options.hoverDuration+"ms linear"
			};o.each(t,
			function(o,
			t){
				var i=r.target.css(o);i!==t&&delete n[
					o
				]
			}),
			r.target.css(n),
			r.options.round&&r.target.css({
				WebkitBorderRadius:"100%",
				MozBorderRadius:"100%",
				MsBorderRadius:"100%",
				OBorderRadius:"100%",
				borderRadius:"100%"
			})
		}function e(){
			o(window).bind("scroll",
			function(){
				var t=o(this).scrollTop();t>r.options.offset?r.target.fadeIn(r.options.duration):r.target.fadeOut(r.options.duration)
			}),
			r.target.bind("mouseenter",
			function(){
				r.target.css({
					"background-color":r.options.hoverBgColor
				})
			}),
			r.target.bind("mouseleave",
			function(){
				r.target.css({
					"background-color":r.options.bgColor
				})
			}),
			r.target.bind("click",
			function(t){
				t.preventDefault(),
				o("html, body").animate({
					scrollTop:0
				},
				r.options.speed)
			})
		}var r=this;r.target=o(t),
		r.init=function(){
			r.options=o.extend({},
			o.scrollToTop.defaultOptions,
			n),
			r.options.ownStyle||i(),
			e()
		},
		r.init()
	},
	o.scrollToTop.defaultOptions={
		offset:250,
		speed:200,
		duration:500,
		hoverDuration:300,
		ownStyle:!1,
		round:!1,
		// zIndex:1e3,
		zIndex:180,
		// size:52,
		top:"auto",
		// left:"auto",
		bottom:40,
		// right:40,
		borderRadius:52,
		bgColor:"rgba(34, 34, 34, 0.4)",
		hoverBgColor:"rgba(34, 34, 34, 0.7)",
		bgPosition:"50% 50%",
		bgRepeat:"no-repeat",
		bgSize:"36%",
		bgImage:'url("http://iousolution.co.kr/images/chevron-up.svg")'
	},
	o.fn.scrollToTop=function(t){
		return this.each(function(){
			new o.scrollToTop(this,
			t)
		})
	}
}(jQuery);