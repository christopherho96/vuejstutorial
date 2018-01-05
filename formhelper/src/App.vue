<template>
  <div>
    <!-- keep-alive tag specific to vue.js syntax, it says DONT YOU DARE DELETE the stuff within the tag -->
    <keep-alive>
      <component v-bind:is = "component"></component>
    </keep-alive>
    <button v-on:click = "component = 'form-one'">Show form one</button>
    <button v-on:click = "component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components:{
    'form-Helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return {
      component: 'form-two'
    }
  },
  methods:{
    handleSubmit: function(){
      alert("You clicked")
    }
  }
}
</script>

<style>

</style>
