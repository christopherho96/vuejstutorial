import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//custom directives 

//creates a new directive called rainbow
// changes the style.color property of the element
// gives it a hex value of a random 6 digit number
// gives 8-2  = 6 digit
Vue.directive('rainbow',{
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px"
    }else if(binding.value == "narrow"){
      el.style.maxWidth = "400px"
    }
    if(binding.arg == 'column'){
      el.style.background = "#ddd"
      el.style.padding = '20px';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
