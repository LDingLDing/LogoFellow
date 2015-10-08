;(function($){
	var LogoFellow = function(settings){
		var self = this;
		// this.settings = {

		// };
		// $.extend(this.settings,settings || {});

		this.logo = $('#logoFellow');
		this.logo.css({
			'position':'absolute',
			'z-index':'66666'
		});


		$(document).mousemove(function(e){
			var offsetLeft = e.clientX-self.logo.width()/2;
			var offsetTop = e.clientY -self.logo.height()/2;
			self.logo.css({
				'left':offsetLeft + 'px',
				'top':offsetTop + 'px'
			});
		});
		this.account = 0;
		$(document).on('click',function(e){
			self.account += 1;
			if(self.account > 10) {
				self.clear();
			}
			// e.preventDefault();
			var div = self.logo.clone();
			div.removeAttr("id");
			div.addClass('logoFellow');
			$('body').append(div);
			self.logo.css({
				'transform':'rotate(' + Math.random()*360 + 'deg)',
				'-ms-transform':'rotate(' + Math.random()*360 + 'deg)',
				'-moz-transform':'rotate(' + Math.random()*360 + 'deg)',
				'-webkit-transform':'rotate(' + Math.random()*360 + 'deg)',
				'-o-transform':'rotate(' + Math.random()*360 + 'deg)'
			});


		});

	};
	LogoFellow.prototype = {
		clear:function(){
			$(".logoFellow").remove();
			this.account = 0;
		}
	};
	window['LogoFellow'] = LogoFellow;
})(jQuery);