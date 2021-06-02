const chokidar = require( 'chokidar' );
const fs = require( 'fs' );

module.exports = {

  watch: function ( list ) {
    chokidar.watch( list ).on( 'change', ( event, path ) => {
      let theFile = fs.readFileSync( './tailwind.config.js', 'utf8' );

      function change( theFile ) {
        if ( theFile.includes( 'tailwindConfigChanger state: a' ) ) {
          theFile = theFile.replace( 'tailwindConfigChanger state: a', 'tailwindConfigChanger state: b' );
          fs.writeFileSync( './tailwind.config.js', theFile );
        } else {
          theFile = theFile.replace( 'tailwindConfigChanger state: b', 'tailwindConfigChanger state: a' );
          fs.writeFileSync( './tailwind.config.js', theFile );
        }
      }

      setTimeout( change, 100, theFile );

    } );
  }
}