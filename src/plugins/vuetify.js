import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: 'purple',
        secondary: 'grey',
        accent: 'black',
        error: 'red',
        background: 'indigo'
      },
      dark: {
        primary: 'blue',
        background: 'indigo'
      }
    }
  }
});
