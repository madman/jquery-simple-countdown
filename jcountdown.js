(function($) {
	$.fn.countdown = function(selector){

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
			var left = parseInt(timer.data('left'));
			
			timer.text(inttotime(left));
			
			if (left > 0) {
				timer.data('left', left - 1);
				setTimeout(function() {step(timer)},1000);
			}
		}
	
		return this.each(function() {
			var self = $(this);

	   		if (!self.data('initilized')) {
				self.data('left', parseInt(self.attr('start-time')));
				self.data('initilized', true);
				
				step(self);
			}
	
	    });
	};
}(jQuery));
