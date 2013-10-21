(function($) {
	$.fn.countdown = function(){

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
			var left = parseInt(timer.data('time'));
			
			timer.text(inttotime(left));
			
			if (left > 0) {
				timer.data('time', left - 1);
				setTimeout(function() {step(timer)},1000);
			}
		}
	
		return this.each(function() {
			var self = $(this);

	   		if (!self.data('countdown')) {
				self.data('countdown', true);
				
				step(self);
			}
	
	    });
	};
}(jQuery));
