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
	}
};

Lungo.dom('#features').on('load', function(event) {
});