//=require app/requires/jquery.js
/*
** Remove .hidden after a delay
*/
var hideDelay = function(classname, time, hide) {
	setTimeout(function() {
		$(classname).removeClass(hide);
	}, time);
};

hideDelay('.headline', 500, 'hidden');
hideDelay('.home-image', 2500, 'transparent');
hideDelay('.quote', 2500, 'hidden');
hideDelay('nav', 2500, 'hidden');
