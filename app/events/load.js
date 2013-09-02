// JavaScript Document
var App = (function(lng, undefined) {
    return {      
    };
})(Lungo);
Lungo.Events.init({    
	'load section#main': function(event) {
		/*var el = $$('section#main [data-control=carousel]')[0];
		var example = Lungo.Element.Carousel(el, function(index, element) {
			//Lungo.dom("section#carousel .title span").html(index + 1);
		});*/
	},
	'load section#catalogo': function(event) {
	},
	'load section#favoritos': function(event) {
	},
	'load section#agregar': function(event) {
	},
	'load section#buscar': function(event) {
	},
	'load section#cerca': function(event) {
	},
	'load section#carousel': function(event) {
		var el = $$('[data-control=carousel]')[0];
		var example = Lungo.Element.Carousel(el, function(index, element) {
			Lungo.dom("section#carousel .title span").html(index + 1);
		});
	},
	'load section#pull': function(event) {
        App.pull = new Lungo.Element.Pull('section#pull article', {
            onPull: "Pull down to refresh",
            onRelease: "Release to get new data",
            onRefresh: "Refreshing...",
            callback: function() {
                alert("Pull & Refresh completed!");
                App.pull.hide();
            }
        });
    },
});