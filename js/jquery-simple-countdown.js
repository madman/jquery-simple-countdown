/*!
 * jQuery Simple Countdown Plugin v1.1
 * https://github.com/madman/jquery-simple-countdown
 *
 * Copyright 2013 Yuriy Prokopets
 * Released under the MIT license
 */
(function($) {
	$.fn.countdown = function(options, callback){

		if ($.isFunction(options)) {
			callback = options;
			options = {};
		}

		var defaults = {
			date: 'time',
			callback: 'callback',
			step: 1000,
			end: 'end'
		};
		var settings = $.extend({}, defaults, options);


		var intToTime = function(val) {
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
				left = timer.data(settings.end) - Math.round(new Date().getTime() / 1000);

			timer.text(intToTime(left));

			if (left > 0) {
				setTimeout(function() {step(timer)}, settings.step);
			} else if (callback = timer.data(settings.callback)) {
				if ($.isFunction(callback)) {
					callback.call(null, timer);
				}
			}
		}

		return this.each(function() {
			var self = $(this);

			if (!self.data(settings.end)) {
				self.data(settings.end, Math.round(new Date().getTime() / 1000) + parseInt(self.data(settings.date)));
				self.data(settings.callback, callback);
				
				step(self);
			}

		});
	};
}(jQuery));
