// Global Imports
import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

// Local Imports
import App from "./App.vue";
import router from "./router";
// PrimeVue Imports
import Button from "primevue/button";
import InputText from "primevue/inputtext";

// PrimeVue CSS Imports
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

// App Instance
const app = createApp(App);

// App Configurations
app.use(createPinia());
app.use(router);
app.use(PrimeVue);

// Global Components
app.component("PrimeButton", Button);
app.component("InputText", InputText);

app.mount("#app");
