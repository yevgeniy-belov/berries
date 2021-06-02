const fs = require( 'fs' );
const puppeteer = require( 'puppeteer' );
const path = require( 'path' );
let localList = [];
let globalList = [];

module.exports = {
  generate: async function ( urls, regexp ) {
    const browser = await puppeteer.launch( {
      args: ['--single-process', '--no-zygote', '--no-sandbox']
    } );
    const page = await browser.newPage();
    for ( let i = 0; i < urls.length; i++ ) {
      let url = urls[i];
      console.log( url );
      if ( url !== '' ) {
        await page.goto( url );
        let bodyHTML = await page.evaluate( () => document.body.innerHTML );
        let classesList = bodyHTML.match( regexp );
        for ( let i = 0; i < classesList.length; i++ ) {
          classesList[i] = classesList[i].replace( 'class="', '' );
          classesList[i] = classesList[i].replace( '"', '' );
          classesList[i] = classesList[i].match( /[\w'-]+/g );

          if ( classesList[i] !== null ) {
            classesList[i].forEach( element => {
              localList.push( element );
            } );
          }
          localList = [... new Set( localList )];
        }
        globalList = [...localList];

      } else {
        fs.readdir( './keep', ( err, files ) => {
          if ( err ) throw err;

          for ( const file of files ) {
            fs.unlink( path.join( './keep', file ), err => {
              if ( err ) throw err;
            } );
          }
        } );
      }

    };
    fs.writeFileSync( `./keep/data.json`, JSON.stringify( globalList, null, 4 ), function ( err, result ) {
      if ( err ) console.log( 'error', err );
    } );
    await browser.close();
  }
}
