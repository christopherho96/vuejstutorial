import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

//initiate a new router
const router = new VueRouter({
  routes: Routes,
  mode: 'hash'
});

/*
// this is the same thing as what we did above, but instead, we create our routes in an external file, then imported it

const router = new VueRouter({
  routes: [
    {
        path: '/',
        component: showBlogs
    },
    {
        path: '/add',
        component: addBlog
    },
  ]
});

/*

//custom directives 

//creates a new directive called rainbow
// changes the style.color property of the element
// gives it a hex value of a random 6 digit number
// gives 8-2  = 6 digit

/*Vue.directive('rainbow',{
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})*/

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

//Filters


Vue.filter('snippet', function(value){
  return value.slice(0,100)+"..."
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
