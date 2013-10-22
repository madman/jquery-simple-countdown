(function($) {
	$.fn.countdown = function(options, callback){

		if ($.isFunction(options) {
			callback = callback || options;
		}

		var defaults = {
 			data: 'time'
		};
		var settings = $.extend({}, defaults, options);


		var inttotime = function(val) {
			var 
				hours = (Math.floor(val / 3600)),
				minutes = (Math.floor(val / 60) - (Math.floor(val / 3600) * 60)),
				seconds = val % 60;
			
			if (hours < 10) {
				hours = '0' + hours;
			}
		
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
		
			if (seconds < 10) {
				seconds = '0' + seconds;
			}
			
			return hours + ":" + minutes + ":" + seconds;
		}
		
		var step = function(timer) {
			var left = parseInt(timer.data(settings.data));
			
			timer.text(inttotime(left));
			
			if (left > 0) {
				timer.data(settings.data, left - 1);
				setTimeout(function() {step(timer)},1000);
			} elseif ($.isFunction(self.data('callback'))) {
				var callback = self.data('callback');
				callback();
			}
		}
	
		return this.each(function() {
			var self = $(this);

	   		if (!self.data('countdown')) {
				self.data('countdown', true);
				self.data('callback', callback);
				
				step(self);
			}
	
	    });
	};
}(jQuery));
