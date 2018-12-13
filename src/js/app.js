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
});
