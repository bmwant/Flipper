(function( $ ) {
 
    $.fn.flipper = function() {
        this.filter( ".flip-container" ).each(function() {
            var jThis = $( this );
			var flipper = jThis.children(".flipper");
			var widthFront = flipper.children(".front").width();
			var widthBack = flipper.children(".back").width();
			var width = jThis.hasClass("flip") ? widthFront : widthBack;

			flipper.width(width);

            jThis.toggleClass("flip");
        });
        return this;
    };
 
}( jQuery ));