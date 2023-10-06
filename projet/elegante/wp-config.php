<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'elegante' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'QF*x2ToR#D6e#FT1;P%eeCZO<XA!e(Xsd*kHH8%a1WPLdM FT+SDXvzrqccv.w2E' );
define( 'SECURE_AUTH_KEY',  'cZY:>`,r7[m8_r!>COYdi$pJP(a8.(y?KDX?ng~Dc)PH&;s.HG}{R|<rM,HRRC:b' );
define( 'LOGGED_IN_KEY',    'N/U!2pH8g$*N#$/inlv@(r=3;*x632/k?Myh=*>!g*{b$SEb3?P_N1Q!Vqfiwt`Q' );
define( 'NONCE_KEY',        'Dou 8YFzLM?[_z{#i;s${$PckFW/?44.-r+OtgVnmd&.?CM00OC,lO,hC_;[dhzZ' );
define( 'AUTH_SALT',        '2bmTm4PJ+3#_DVx^_O|>nNKYP5g|[4V=>afDV[znQlhbydK_97/NpamB$jCK*bdY' );
define( 'SECURE_AUTH_SALT', '}Z3pd8ex]Wo?]eEx:z.pkiw<-i2<v}<-G01>Laj0r,fj<V$?`4.IG}qsD$7/ dl*' );
define( 'LOGGED_IN_SALT',   '0O6oOiCf~FH}[Btu7NDe%_>M<+XM(:!4~z##}kWE7  JU_R,`e~#_3eZ*tBKS-o?' );
define( 'NONCE_SALT',       'd^vf$7=9<_]I6HCe<6/}~vHxt[cUp;i7:k5p4xve~pQXn+dAM?juX-<i^csY.5@-' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
