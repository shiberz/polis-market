if (module.hot) {
  module.hot.accept();
}

$(function(){
	var $sidebar = $('.js-sidebar');
	var $sidebarToggler = $('.js-sidebar-toggle');
	var $loginIcon = $('.js-login-icon');
 	$sidebarToggler.on('click', function() {
 		var isOpen = !$sidebar.hasClass('sidebar--closed');
 		$sidebar.toggleClass('sidebar--closed', isOpen);
 		$loginIcon.toggleClass('icon--big', !isOpen);
 		$loginIcon.toggleClass('icon--small', isOpen);
 	});


 	$('.js-block-toggle').on('click', function(e) {
 		var $block = $(e.target).closest('.js-block');
 		var $icon = $(e.target).children('.js-block-icon');

 		var isOpen = !$block.hasClass('block--closed');
 		$block.toggleClass('block--closed', isOpen);
 		$icon.toggleClass('icon__up-arr', !isOpen);
 		$icon.toggleClass('icon__down-arr', isOpen);
 	});
});
