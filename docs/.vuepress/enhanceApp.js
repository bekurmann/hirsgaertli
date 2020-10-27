/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";

import '@mdi/font/css/materialdesignicons.css';


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(Vuetify);
  
  options.vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#455A64',
          accent: '#455A64'
        }
      },
    },
    breakpoint: {
      thresholds: {
        xs: 420, // these are highly recommended values
        sm: 720, // default values are shown in
        md: 960, // https://vuetifyjs.com/en/customization/breakpoints
        lg: 1280
      }
    }
  });
}
