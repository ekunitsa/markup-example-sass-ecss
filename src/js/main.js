// Only for develop. Needed for twig watcher:
if (process.env.NODE_ENV == 'development') {
  require('../index.twig');
}

// Global style file
import '../sass/style.sass';

// Utils
import 'jquery-mask-plugin';
import './utils/avif-webp';

// Plugins
import slick from 'slick-carousel';

// JS
import './global';
import '../components/stickMenu/stickMenu';
import '../components/modal/modal';
import '../components/toTop/toTop';
import '../components/header/header';
import '../components/mobileMenu/mobileMenu';
import '../components/reviews/reviews';
import '../components/connect/connect';
