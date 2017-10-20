<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dentrx');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'o~P*?C:.0kQS^S8HnW]W_Xt&1qhy<68GIJ>}*k~Tb+JFn2=i<K2ed3k[KK%Qv-1Z');
define('SECURE_AUTH_KEY',  '1N5ge!}sJ9_:mFJD;MDO`>2,FpX%nZZIBA-a89(u$-] N?~H,7u`C+1Ih6bsa/Tk');
define('LOGGED_IN_KEY',    'f)HKgbX}-/w+$*z }.B:c6SD{@1<qj^%( ,&HB|PROk@V:dR:%AIl8]}aSk,nAph');
define('NONCE_KEY',        'UGTE[C vJ{,v=}wtYPC%W$gwT4&.f/rvSu;Etq`^/Cq]__V4Xv^njYVSD,N<o16^');
define('AUTH_SALT',        'Hs;7c08oq~F7Q5NZD3fsla)Aw}hxXq;oz0J^!jcl8yT(zq~[_tHX18aVPCMzl$t<');
define('SECURE_AUTH_SALT', '&,wx:b;?x3qjW)<Mc[tyaTY+krpQ6uV:*l!6X;_:qhQrBn&E*3^jdAwx?u#NLmv]');
define('LOGGED_IN_SALT',   'W.p4DgFE-!FPnfN}Smezld7wr18P0e(~L.gaxVSbQwFmJ=VPG(T}T[xy|4/o[^O4');
define('NONCE_SALT',       'VlsqVSvyz({IBTbY*Z=q3vR$i89S)N.l/69-`ZQEK;>m+FKz2x0LD_cy5B6o)S8@');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'dtr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
