/*
** Remove .hidden after a delay
*/
var hideDelay = function(classname, time) {
	setTimeout(function() {
		$(classname).removeClass('hidden');
	}, time);
};

hideDelay('.headline', 500);
hideDelay('.quote', 2000);
hideDelay('nav', 2000);


// $(document).ready(function(){
// });