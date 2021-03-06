import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate)

//custom directives
Vue.directive('smiley-face', {
  bind(el, binding, vnode) {
    el.innerHTML = ':('
    el.style.color = 'rgb(180, 80, 80)';
    el.style.fontSize = '30px';
  }
})

Vue.directive('box-shadow', {
  bind(el, binding, vnode) {
    if (binding.arg === 'offset') {
      el.style.boxShadow = `0px ${binding.value}px 5px #222`
    } else {
      el.style.boxShadow = `0px 3px 5px #666`
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
