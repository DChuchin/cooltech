var sliderWidget = (function(){

	function init () {
		$( ".filter__slider-element" ).slider({
      	range: true,
      	min: 0,
      	max: 500,
      	values: [ 75, 300 ],
      	slide: function( event, ui ) {
        	$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      	}
    	});
    	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

	};
	return {
		init: init
	}


})();

var changeViews = (function() {

function init() {
	_setUpListeners();
	};

	function _setUpListeners() {

		$('.sort__view-item').click(_chageViews);
	};

	function _chageViews (e) {
		e.preventDefault();
		var view = $(this).attr('data-view');
	
		$('.products__list')
			.removeClass()
			.addClass('products__list products__list_' + view);

		var sortElem = $('.sort__view-list').find('li');

		$.each(sortElem, function() {
			var currentView = $(this).attr('data-view');
			if (currentView == view) {
				$('.sort__view_' + currentView).addClass('active');
			} else {
				$('.sort__view_' + currentView).removeClass('active');
			}
		}); 
	};

	return {
		init: init
	}


})();


var filterReset = (function(){

	function init () {
		_setUpListeners ();
	};

	function _setUpListeners () {
		$('.filter__reset').click(function(e) {
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.filter__item'),
				checkboxes = container.find('input:checkbox');

			checkboxes.each(function() {
				$(this).removeProp('checked')
			});
		});
	}

	return {
		init: init
	}


})();

var gallery = (function () {

	function init () {
		_setUpListeners ();
	};

	function _setUpListeners () {
		$('.products__slideshow-item').click(_changePic);
	};

	function _changePic () {
		console.log('ты нажал на картинку');
	}

	return {
		init: init
	};

})();




$(document).ready(function() {
	sliderWidget.init();
	changeViews.init();
	filterReset.init();
	gallery.init();
});



