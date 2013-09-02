// Al cargar la pagina principal hacemos...

//Directivas para template.js
dirURL = { // Parseamos la URL de json para mandarla al SRC del template HTML
	attachments: {
		url: {
			src: function(params) {
				if(this.url != "") {
					return this.url;
				}
				else {
					return "http://lorempixel.com/320/418/sports/";
				}
			}
		}
	},
};

Lungo.dom('#main').on('load', function(event) {
    var afterNotification = function(){
    	Lungo.Notification.hide();
	};
	Lungo.Notification.show(
		"exchange",                //Icon
		"Cargando moteles...",    //Title
		3,                       //Seconds
		afterNotification       //Callback function
	);
	$$.ajax({
		type: 'GET', 
		url: getMoteles + "?include=id,title,attachments,thumbnail,thumbnail_images&count=5",
		dataType: 'json',
		timeout:8000,
		success: function(destacados) {
				$('.destacados').render(destacados.posts,dirURL);
				var el = $$('section#main [data-control=carousel]')[0];
				var example = Lungo.Element.Carousel(el, function(index, element) {
					//Lungo.dom("section#carousel .title span").html(index + 1);
				});
		},//sucess
		error: function(xhr, type) { 
			navigator.notification.alert(
				'¡No se logro cargar los primeros moteles',  
				afterNotification,         
				'Dress4aday',           
				'Cerrar'               
			);
		 }//error
	});//AJAX
	//Cargamos los primeros 10
	$$.ajax({
		type: 'GET', 
		url: getMoteles + "?include=id,title,attachments,thumbnail,custom_fields,thumbnail_images",
		dataType: 'json',
		timeout:8000,
		success: function(ultimos) {
				$('.moteles').render(ultimos.posts,dirURL);
		},//sucess
		error: function(xhr, type) { 
			navigator.notification.alert(
				'¡No se logro cargar los primeros moteles',  
				afterNotification,         
				'Dress4aday',           
				'Cerrar'               
			);
		 }//error
	});//AJAX
	
	//Show loading screen
	//Lungo.Notification.show();
});