/**
 * @author Jose Ignacio Santa Cruz G.
 */ 
$(document).ready(function(){
	$('#jmpress').jmpress({
		stepSelector: "section"
		, hash: { use: true }
        , viewPort: { zoomable: 1, maxScale: 1 }
        , setActive: function(element, eventData) {
			console.log('element', element, element.attr('id'));
            console.log('eventData', eventData);  
            console.log('subtitlesEnabled', subtitlesEnabled);
            if(subtitlesEnabled){
                var activeSlide = $('#jmpress').jmpress('active');
                if(activeSlide.attr('id') === element.attr('id')){
                    console.log('activeSlide', activeSlide, activeSlide.attr('id'));
                    var currentItem = activeSlide.find('[class*="do-"]').not('[class*="has-"]');
                    console.log('currentItem', currentItem);

                    var subs = $(currentItem[0]).data('translation');
                    console.log('Element', subs);                
                    $('#subtitles').html(subs);    
                }                
            }
		}
	});    
    
    $('section').on('enterStep', function(){
        $('#subtitles').html('');
        var subs = $(this).data('translation');
        subs = (!subs)?'':subs;
        console.log('enterStep', subs);
        $('#subtitles').html(subs);
    });
    
    var subtitlesEnabled = false;   
    $('#chkSubtitles').on('change', function(){
        if($(this).prop('checked')){
            console.log('Enable subtitles');            
            $('#jmpress').addClass('subsEnabled');
            $('p.helper').html('<img src="img/arrows.png" class="img-responsive" />To navigate<br />use the arrows');
            $('#subtitles').fadeIn();
            var currentSlide = $('#jmpress').jmpress('active');
            var subs = $(currentSlide).data('translation');
            subs = (!subs)?'':subs;
            console.log('Section', subs);
            $('#subtitles').html(subs);
            
            subtitlesEnabled = true;   
        } else {
            $('#jmpress').removeClass('subsEnabled');
            $('p.helper').html('<img src="img/arrows.png" class="img-responsive" />Para navegar<br /> use las flechas');
            $('#subtitles').fadeOut();
            
            subtitlesEnabled = false;   
        }
    });
    
    $('p.helper').click(function(){
        $(this).fadeOut();
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
