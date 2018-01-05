<template>
  <div>
    <show-blog></show-blog>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlogs,
    'list-blogs': listBlogs
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
