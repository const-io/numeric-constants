'use strict';

// MODULES //

var tape = require( 'tape' );
var CONST = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.equal( typeof CONST, 'object', 'main export is an object' );
	t.end();
});
