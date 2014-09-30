var salesDetailsLeft= $('.sales__details__left');
var salesDetailsRight= $('.sales__details__right');
var salesLeft = $('.sales__left');
var salesRight = $('.sales__right');

var salesClicker = function () {
	var isActive = salesLeft.attr('data-state');

	if (isActive == 'active') {
		salesDetailsLeft.attr('data-state', 'inactive');
		}else{
		salesDetailsLeft.attr('data-state', 'active');
	}
	
};


salesLeft.on('click', salesClicker);

var salesClicker = function () {
	var isActive = salesRight.attr('data-state');

	if (isActive == 'active') {
		salesDetailsRight.attr('data-state', 'inactive');
		}else{
		salesDetailsRight.attr('data-state', 'active');
	}
	
};


salesRight.on('click', salesClicker);

