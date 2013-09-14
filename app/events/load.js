// JavaScript Document
var App = (function(lng, undefined) {
    return {      
    };
})(Lungo);
var accesado = 0;
var afterNotification = function(){
	//Lungo.Notification.hide();
};
Lungo.Events.init({  
	'load aside#features': function(event) {
	},  
	'load section#main': function(event) {
		
		/*Lungo.Notification.show(
			"exchange",                //Icon
			"Cargando moteles...",    //Title
			3,                       //Seconds
			afterNotification       //Callback function
		);*/
		
	},
	'load section#catalogo': function(event) {
	},
	'load section#motel': function(event) {
		
	},
	'load section#favoritos': function(event) {
	},
	'load section#agregar': function(event) {
	},
	'load section#buscar': function(event) {
	},
	'load section#cerca': function(event) {
	},
});