//JavaScript Document

$(document).ready(function(e){
	var citas=[];
$('#enviar').on('click', function(){
	//mostrar el GIF
	
	$.when($.post("http://192.168.4.25/regeneracion/buscarcitas.php",{usuario: $('#usuario').val(), password: $('#pass').val()})).then(
	function exito(datos) {
		alert (datos);0
	},
	function error() {
		alert ("error no se puede alcanzar el servidor");
	}
	
	);//then when
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
});
