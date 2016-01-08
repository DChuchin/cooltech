var sliderWidget = (function(){

	function init () {
		var 
			min = parseInt($('.filter__slider-element').attr('data-min')),
			max = parseInt($('.filter__slider-element').attr('data-max')),
			minConvert = String(min).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб',
			maxConvert = String(max).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб'; 
		
		$('.filter__slider-input_from').val(minConvert);
		$('.filter__slider-input_to').val(maxConvert);
		$( ".filter__slider-element" ).slider({
      		range: true,
      		min: min,
      		max: max,
      		values: [min, max],
      		step: 50,
      		slide: function() {
        		_insertValues ();
      	}
    	});
    	// $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
     //  " - $" + $( "#slider-range" ).slider( "values", 1 ) );

	};

	function _insertValues () {
		var
			from = $('.filter__slider-input_from'),
			to = $('.filter__slider-input_to'),
			values = $(".filter__slider-element").slider('option', 'values');
			min = String(values[0]).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб',
			max = String(values[1]).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб';
			from.val(min);
			to.val(max);

	} 
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

var slideShow = (function () {

	function init () {
		_setUpListeners ();
	};

	function _setUpListeners () {
		$('.products__slideshow-link').click(_changePic);
	};

	function _changePic (e) {
		e.preventDefault();
		$(this).closest('.products__slideshow-item').addClass('active').siblings().removeClass('active');
		var 
			container = $(this).closest('.products__slideshow'),
			path = $(this).find('img').attr('src').replace(".png","big.png"),
			display = container.find('.products__slideshow-img');
			
		 	$(display).attr('src', path);
		
	}

	return {
		init: init
	};

})();


var accordeon = (function () {

	function init () {
		_setUpListeners ();
	};

	function _setUpListeners () {
		$('.filter__title').on('click', _openSection);
	};

	function _openSection (e) {
		e.preventDefault();

		var
			container = $(this).closest('.filter__item'),
			content = container.find('.filter__content');

		if (!container.hasClass('active')) {
			container.addClass('active');
			content.stop(true, true).slideDown();
		} else {
			container.removeClass('active');
			content.stop(true,true).slideUp();
		}
	}


	return {
		init: init
	};

})();





$(document).ready(function() {
	sliderWidget.init();
	changeViews.init();
	filterReset.init();
	slideShow.init();
	accordeon.init();
	$('.sort__select-elem').select2({
		minimumResultsForSearch: Infinity
	});
	$('.filter__colors-link').click(function (e) {
		e.preventDefault();

		var 
			item = $(this).closest('.filter__colors-item');
		
		if (item.hasClass('active')) {
			item.removeClass('active');
		} else {
			item.addClass('active');
		}
	});
	$('.attention__text').columnize({
		width: 530
	});
});



