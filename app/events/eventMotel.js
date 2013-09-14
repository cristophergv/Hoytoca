// Al cargar la pagina principal hacemos...

//Directivas para template.js

Lungo.dom('#motel').on('load', function(event) {
	
});
Lungo.Events.init({  
	'load section#motel': function(event) {
		var la = $$('section#motel [data-control=carousel]')[0];
			var galeria = Lungo.Element.Carousel(la, function(index, element) {
			//Lungo.dom("section#carousel .title span").html(index + 1);
		});
	}
})