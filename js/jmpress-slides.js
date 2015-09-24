/**
 * @author Jose Ignacio Santa Cruz G.
 */
$(document).ready(function(){
	$('#jmpress').jmpress({
		stepSelector: "section"
		,hash: { use: true }
	});
	
	$("a[href^='http']").attr('target','_blank');
	
	var correo   = $("span.correo").html();		
	var ecorreo  = correo.replace('<i class="icon-correo"></i>', "@");
	var contacto = '<a href="' + getProtocol() + ecorreo + '" class="email">' + correo + '</a>';
	
	$("span.correo").after(contacto);
	$("span.correo").remove();		
});

function getProtocol(){
	var prefix = "mai";
	var sufix  = "lto";
	
	return prefix + sufix + ":"; 
}

$.jmpress("template", "auto", {
	children: function(idx) {
		return {
			y: 400
			,x: -300 + idx * 300
			,template: "auto"
			,scale: 0.1
		}
	}
});
