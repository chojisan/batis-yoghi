import "@/assets/scss/main.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import NotificationPlugin from "@/components/bootstrap/NotificationPlugin/index";

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(NotificationPlugin);
  }
};