<template>
  <div>
    <show-blog></show-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue'
export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlogs
  },

  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Helvetica'
}
</style>
