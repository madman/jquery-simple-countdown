(function($) {
	$.fn.countdown = function(options, callback){

		if ($.isFunction(options)) {
			callback = options;
			options = {};
		}

		var defaults = {
 			data: 'time',
 			flag: 'countdown',
 			callback: 'callback',
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
			var 
				callback,
				left = parseInt(timer.data(settings.data));
			
			timer.text(inttotime(left));
			
			if (left > 0) {
				timer.data(settings.data, left - 1);
				setTimeout(function() {step(timer)},1000);
			} else if (callback = timer.data(settings.callback)) {
				if ($.isFunction(callback)) {
					callback();
				}
			}
		}
	
		return this.each(function() {
			var self = $(this);

	   		if (!self.data(settings.flag)) {
				self.data(settings.flag, true);
				self.data(settings.callback, callback);
				
				step(self);
			}
	
	    });
	};
}(jQuery));
