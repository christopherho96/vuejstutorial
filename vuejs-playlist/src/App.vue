<template>
  <div>
    <h1>{{title}}</h1>
    <ninja></ninja>
  </div>
</template>

<script>

import Ninja from './Ninja.vue'
export default {
  components:{
    'ninja' : Ninja
  },
  data () {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<!-- the scoped keyword will only apply the styles to the contents of this file-->
<style scoped>
h1{
   color: purple;
}
</style>
