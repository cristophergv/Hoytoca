// Al cargar la pagina principal hacemos...

//Directivas para template.js
directivaMain = { // Parseamos la URL de json para mandarla al SRC del template HTML
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
	"precio": {
		html: function() { 
			return this.custom_fields.precio; 
		}
	},
	"direccion_portada": {
		html: function() { 
			return this.custom_fields.direccion + "<br> " + this.custom_fields.colonia + ", " + this.custom_fields.ciudad; 
		}
	},
	"direccion": {
		html: function() { 
			return this.custom_fields.direccion + ", " + this.custom_fields.colonia + ", " + this.custom_fields.ciudad; 
		}
	}
	
};

Lungo.dom('#main').on('load', function(event) {
	if(accesado == 0) {
		//Cargamos los moteles de la Categoria: Destacados App Banner Portada ID: 11
		Lungo.Notification.show();
		$$.ajax({
			type: 'GET', 
			url: getMoteles + "?include=id,title,attachments,thumbnail,custom_fields,thumbnail_images&cat=11&orderby=rand",
			dataType: 'json',
			timeout:8000,
			success: function(destacados) {
					$('.destacados').render(destacados.posts,directivaMain);
					var el = $$('section#main [data-control=carousel]')[0];
					var example = Lungo.Element.Carousel(el, function(index, element) {
						//Lungo.dom("section#carousel .title span").html(index + 1);
					});
					accesado = 1;
					Lungo.Notification.hide();
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
		//Cargamos los moteles de la Categoria: Destacados App Lista Portada ID: 12
		$$.ajax({
			type: 'GET', 
			url: getMoteles + "?include=id,title,attachments,thumbnail,custom_fields,thumbnail_images&cat=12&orderby=rand",
			dataType: 'json',
			timeout:8000,
			success: function(ultimos) {
					$('.moteles').render(ultimos.posts,directivaMain);
			},//sucess
			error: function(xhr, type) { 
				navigator.notification.alert(
					'¡No se logro descargar la información',  
					afterNotification,         
					'Dress4aday',           
					'Cerrar'               
				);
			 }//error
		});//AJAX
	}//If Accesado
	
});
$$('.attachments').doubleTap(function() {
		alert("Hola");
	})