// Al cargar la pagina principal hacemos...

Lungo.dom('#main').on('load', function(event) {
    var afterNotification = function(){
    	Lungo.Notification.hide();
	};
	Lungo.Notification.show(
		"exchange",                //Icon
		"Cargando...",              //Title
		3,                      //Seconds
		afterNotification       //Callback function
	);
	//Show loading screen
	//Lungo.Notification.show();
});