var $ = require("jquery");
global.jQuery = require("jquery")
require('bootstrap')
require('./jquery.pagepiling')
require('./validation')

$(document).ready(function() {

	$('#pagepiling').pagepiling({
		navigation: false,
		normalScrollElements: '#info',
		anchors: ['page1', 'page2', 'page3', 'page4'],
		afterLoad: function(anchorLink, index){

			if (index == 2) {
				$("#mybarber").find(".project-container").addClass("slide-ntos");
				$("#mybarber").find(".project-link").addClass("slide-ston");
				$("#mybarber").find(".project-info").addClass("slide-wtoe");
			} else if (index == 3) {
				$("#wwawesome").find(".project-container").addClass("slide-ntos");
				$("#wwawesome").find(".project-link").addClass("slide-ston");
				$("#wwawesome").find(".project-info").addClass("slide-wtoe");
			}
		}
	});

	if ($('form').length != 0) {
		$('form').validate();
	}

});
