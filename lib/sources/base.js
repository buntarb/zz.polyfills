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

/**
 * Bootstrap module method.
 */
zz.polyfills.bootstrap = function( ){

	//
};
window[ 'bootstrap' ] = zz.polyfills.bootstrap;