import striptags from 'striptags';

export default function cleanupText( full, maxLength ) {
	let text = striptags( full ).split( '\n' ).filter( line => line.length > 0 );
	let words, line = [], lineLength = 0;
	let lines = [];

	text = text[text.length - 1];
	words = text.split( ' ' );

	words.map( word => {
		if ( word.length + lineLength >= maxLength ) {
			lines.push( line.join( ' ' ) );
			lineLength = 0;
			line = [];
		}

		line.push( word );
		lineLength += word.length + 1;
	} );

	if ( line.length > 0 ) {
		lines.push( line.join( ' ' ) );
	}

	if ( lines.length > 5 ) {
		lines[4] += '...';
		return lines.splice( 0, 5 );
	}

	return lines;
}
