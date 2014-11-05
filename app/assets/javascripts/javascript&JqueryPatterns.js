 // jQuery patterns..

 // composite pattern.

  // describes a group of objects that can be treated in the same way a single instance may be...
  // same behavious will be applied regardless of whether were working with 1 or a thousand objects .
    // e.g ..

// Single elements adding active classs to all of them...
$( "#singleItem" ).addClass( "active" );
$( "#container" ).addClass( "active" );
 
// Collections of elements
$( "div" ).addClass( "active" );
$( ".item" ).addClass( "active" );
$( "input" ).addClass( "active" );

// we can use jQuerys addclass() implementation can use native for loops
  // or jQuery.each()/jQuery.fn.each() to iterate through adn apply the method.
     addClass: function( value ) {
      var classNames, i, l, elem,
        setClass, c, cl;
     
      if ( jQuery.isFunction( value ) ) {
        return this.each(function( j ) {
          jQuery( this ).addClass( value.call(this, j, this.className) );
        });
      }
     
      if ( value && typeof value === "string" ) {
        classNames = value.split( rspace );
     
        for ( i = 0, l = this.length; i < l; i++ ) {
          elem = this[ i ];
     
          if ( elem.nodeType === 1 ) {
            if ( !elem.className && classNames.length === 1 ) {
              elem.className = value;
     
            } else {
              setClass = " " + elem.className + " ";
     
              for ( c = 0, cl = classNames.length; c < cl; c++ ) {
                if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
                  setClass += classNames[ c ] + " ";
                }
              }
              elem.className = jQuery.trim( setClass );
            }
          }
        }
      }
     
      return this;
    }
// the adapter pattern ============================================================================================

// translates an interface for an object or class intor interface comptable with a specfic system...
// the facade pattern.

