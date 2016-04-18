/**
 * @fileoverview Provide zz.polyfills base object.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.polyfills' );

/**
 * Base namespace for zz.polyfills module.
 * @const
 */
zz.polyfills = zz.polyfills || { };

// Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
// Adapted from https://gist.github.com/paulirish/1579671 which derived from
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Moller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavi?, Darius Bacon
// MIT license
( function( ){ 'use strict';

	if( !Date.now ){

		/**
		 * Date.now polyfill.
		 * @return {number} the current Date
		 */
		Date.now = function( ){

			return new Date( ).getTime( );
		};
		Date[ 'now' ] = Date.now;
	}
	var vendors = [ 'webkit', 'moz', 'ms' ];
	for( var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i ){

		var vp = vendors[ i ];
		window.requestAnimationFrame = window[ vp + 'RequestAnimationFrame' ];
		window.cancelAnimationFrame = (

			window[ vp + 'CancelAnimationFrame'] ||
				window[ vp + 'CancelRequestAnimationFrame' ] );
	}
	if( /iP( ad|hone|od ).*OS 6/.test( window.navigator.userAgent ) ||
		!window.requestAnimationFrame ||
		!window.cancelAnimationFrame ){

		var lastTime = 0;
		/**
		 * requestAnimationFrame polyfill.
		 * @param  {!Function} callback the callback function.
		 */
		window.requestAnimationFrame = function( callback ){

			var now = Date.now( );
			var nextTime = Math.max( lastTime + 16, now );
			return setTimeout( function( ){

				callback(lastTime = nextTime);

			}, nextTime - now );
		};
		window.cancelAnimationFrame = clearTimeout;
	}
	goog.exportSymbol( 'window.requestAnimationFrame', window.requestAnimationFrame );
	goog.exportSymbol( 'window.cancelAnimationFrame', window.cancelAnimationFrame );
} )( );