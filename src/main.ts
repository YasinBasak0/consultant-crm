import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, fa } from "vuetify/iconsets/fa";

const theme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#002E5B'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: 'theme',
    themes: {
      theme
    }
  }
});

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
