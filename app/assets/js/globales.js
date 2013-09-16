// Funciones Globales
var milatitud;
var milongitud;

function get_loc() {
   if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(coordenadas,errorMapa,{maximumAge:60000, timeout: 4000});
   }else{
	  alert('Este navegador es algo antiguo, actualiza para usar el API de localización');
	}
}
function errorMapa(error) {
	alert("NO");
	switch(error.code) {
		case error.PERMISSION_DENIED:
		  alert("El usuario denego la petición de geolocalización.");
		  break;
		case error.POSITION_UNAVAILABLE:
		  alert("Información de localización no disponible.");
		  break;
		case error.TIMEOUT:
		  alert("La petición para obtener la ubicación del usuario expiró.");
		  break;
		case error.UNKNOWN_ERROR:
		  alert("Error desconocido.");
		  break;
	}
}
function coordenadas(position) {
  milatitud = position.coords.latitude;
  milongitud = position.coords.longitude;
  mostrar_pin();
}
function mostrar_pin() {
	var miubicacion = new google.maps.LatLng(milatitud,milongitud);
	var motel = new google.maps.LatLng(milatitud, milongitud);
	var distancia = google.maps.geometry.spherical.computeDistanceBetween(miubicacion, motel)/1024;
	distancia = distancia.toFixed(2);
	map = new GMaps({
		div: '#mapa',
		lat: milatitud,
		lng: milongitud,
	  });
  	map.addMarker({
		lat: <?php echo $latitud; ?>,
		lng: <?php echo $longitud; ?>,
		title: '<?php echo get_the_title(); ?>',
		infoWindow: {
		 content: '<p style="display:inline-block; height:100px;"><?php echo get_the_title(); ?><br><?php echo $direccion; ?>, <?php echo $colonia; ?><br><?php echo $estado; ?><br><?php echo $telefono; ?><br>A: ' + distancia + ' km de ti.'
		},
		icon: "<?php echo get_template_directory_uri(); ?>/images/pin.png"
	});
}